import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class AddProductNotify extends Component {
  render() {
    const { product, target, alreadyAdded } = this.props;
    return (
      <div
        className="product-added d-flex align-items-center justify-content-center"
        key={product.id}
      >
        <div className="image rounded border p-2 me-3">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.title + "Img"}
          />
        </div>
        <div className="info">
          <h6 className="fw-bold mb-1">{product.title}</h6>
          <p className="mb-0">
            Success: You have {alreadyAdded && "already"} added <br />{" "}
            <Link
              to={`/E-Commerce-Website-React-Class-Components/products/${product.id}`}
            >
              {product.title}
            </Link>{" "}
            to your{" "}
            <Link
              to={`/E-Commerce-Website-React-Class-Components/${target}`}
              className="text-capitalize"
            >
              {target === "cart" ? "shopping cart" : "wishlist"}
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default AddProductNotify;
