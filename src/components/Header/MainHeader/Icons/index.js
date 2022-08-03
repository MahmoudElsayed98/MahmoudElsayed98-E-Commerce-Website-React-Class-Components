import React, { Component } from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import "./index.css";
import {
  CartProductsContext,
  CartProductsTotalSalaryContext,
  IsCartProductsChangedContext,
  DeliveryCostContext,
  IsWishlistProductsChangedContext,
  WishlistProductsContext,
} from "../../../../App";
import { Link } from "react-router-dom";

class Icons extends Component {
  render() {
    const { removeProductFromCart, hideNavbarNav } = this.props;
    return (
      <CartProductsContext.Consumer>
        {(cartProducts) => (
          <CartProductsTotalSalaryContext.Consumer>
            {(cartProductsTotalSalary) => (
              <IsCartProductsChangedContext.Consumer>
                {(isCartProductsChanged) => (
                  <DeliveryCostContext.Consumer>
                    {(deliveryCost) => (
                      <IsWishlistProductsChangedContext.Consumer>
                        {(isWishlistProductsChanged) => (
                          <WishlistProductsContext.Consumer>
                            {(wishlistProducts) => (
                              <>
                                <div className="icons d-flex flex-column flex-lg-row align-items-center justify-content-center">
                                  <div className="sign-in">
                                    <Link
                                      to="/E-Commerce-Website-React-Class-Components/sign-in"
                                      className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
                                      onClick={hideNavbarNav}
                                    >
                                      <FaUserCircle className="fs-3" />
                                      <p className="fw-bold">Login</p>
                                    </Link>
                                  </div>
                                  <div className="sign-in">
                                    <Link
                                      to="/E-Commerce-Website-React-Class-Components/register"
                                      className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
                                      onClick={hideNavbarNav}
                                    >
                                      <FaUserEdit className="fs-3" />
                                      <p className="fw-bold">Sign Up</p>
                                    </Link>
                                  </div>
                                  <div className="sign-in">
                                    <Link
                                      to="/E-Commerce-Website-React-Class-Components/wishlist"
                                      className="position-relative text-decoration-none d-flex flex-column justify-content-center align-items-center"
                                      onClick={hideNavbarNav}
                                    >
                                      <AiOutlineHeart className="fs-3" />
                                      {isWishlistProductsChanged && (
                                        <span className="changed fw-bold position-absolute d-flex justify-content-center align-items-center rounded-circle text-light">
                                          {wishlistProducts.length}
                                        </span>
                                      )}
                                      <p className="fw-bold">Wishlist</p>
                                    </Link>
                                  </div>
                                  <div className="sign-in">
                                    <Link
                                      to="/"
                                      className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
                                      onClick={hideNavbarNav}
                                    >
                                      <BiGitCompare className="fs-3" />
                                      <p className="fw-bold">Compare</p>
                                    </Link>
                                  </div>
                                </div>
                                <div
                                  className="cart d-flex align-items-center justify-content-center position-relative"
                                  role="button"
                                >
                                  <Link
                                    to="/E-Commerce-Website-React-Class-Components/cart"
                                    className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
                                    onClick={hideNavbarNav}
                                  >
                                    <span className="position-relative d-flex justify-content-center align-items-center">
                                      <p className="mb-0">
                                        {cartProducts.length +
                                          " Item(s) - $" +
                                          cartProductsTotalSalary.toFixed(2)}
                                      </p>
                                      <TiShoppingCart className="fs-1" />

                                      {isCartProductsChanged && (
                                        <span className="changed fw-bold position-absolute d-flex justify-content-center align-items-center rounded-circle text-light">
                                          {cartProducts.length}
                                        </span>
                                      )}
                                    </span>
                                  </Link>
                                  <div className="cart-content rounded text-center">
                                    <div className="content d-flex flex-column">
                                      {cartProducts.length === 0 ? (
                                        <span className="d-block p-3">
                                          <p className="mb-0">
                                            Your shopping cart is empty!
                                          </p>
                                        </span>
                                      ) : (
                                        cartProducts.map((e) => {
                                          return (
                                            <div
                                              key={e.id}
                                              className="cart-item py-2 d-flex align-items-center"
                                            >
                                              <Link
                                                to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                                                className="d-flex align-items-center justify-content-center"
                                              >
                                                <div className="image w-50 p-2 rounded">
                                                  <img
                                                    src={e.image}
                                                    className="img-fluid"
                                                    alt={e.title}
                                                  />
                                                </div>
                                              </Link>
                                              <Link
                                                to={`/E-Commerce-Website-React-Class-Components/products/${e.id}`}
                                                className="text-light d-flex align-items-center title"
                                              >
                                                {e.title}
                                              </Link>
                                              <div className="cart-details d-flex align-items-center justify-content-evenly">
                                                <p className="text-center mb-0">
                                                  x {e.qty}
                                                </p>
                                                <p className="text-center mb-0">
                                                  ${e.price.toFixed(2)}
                                                </p>
                                                <button
                                                  className="btn btn-primary p-0 close rounded-circle d-flex justify-content-center align-items-center"
                                                  onClick={() =>
                                                    removeProductFromCart(e)
                                                  }
                                                >
                                                  <RiCloseFill className="fs-5 text-light" />
                                                </button>
                                              </div>
                                            </div>
                                          );
                                        })
                                      )}
                                    </div>

                                    {cartProducts.length !== 0 && (
                                      <>
                                        <div className="product-summary border-top text-end py-2 px-3 fw-bold">
                                          <p className="mb-0">
                                            Subtotal : $
                                            {cartProductsTotalSalary.toFixed(2)}
                                            <br />
                                            Total : $
                                            {(
                                              cartProductsTotalSalary +
                                              deliveryCost
                                            ).toFixed(2)}
                                          </p>
                                        </div>
                                        <div className="buttons rounded-bottom pb-3">
                                          <Link to="/E-Commerce-Website-React-Class-Components/cart">
                                            <button className="btn btn-light text-uppercase me-2 fw-bold">
                                              view cart
                                            </button>
                                          </Link>
                                          <Link to="/E-Commerce-Website-React-Class-Components/checkout">
                                            <button className="btn btn-light text-uppercase fw-bold">
                                              Checkout
                                            </button>
                                          </Link>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </>
                            )}
                          </WishlistProductsContext.Consumer>
                        )}
                      </IsWishlistProductsChangedContext.Consumer>
                    )}
                  </DeliveryCostContext.Consumer>
                )}
              </IsCartProductsChangedContext.Consumer>
            )}
          </CartProductsTotalSalaryContext.Consumer>
        )}
      </CartProductsContext.Consumer>
    );
  }
}

export default Icons;
