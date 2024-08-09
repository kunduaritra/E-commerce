import React from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const ProductDetails = () => {
  const { productId, price, imgUrl } = useParams();

  const decodedTitle = decodeURIComponent(productId);
  const decodedImgUrl = decodeURIComponent(imgUrl);

  const cartCntx = useContext(CartContext);

  const handleAddToCart = (imgUrl, title, price) => {
    const obj = {
      imageUrl: imgUrl,
      title: title,
      price: price,
    };
    console.log(obj);

    cartCntx.addItem(obj);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={decodedImgUrl} alt={decodedTitle} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h1>{decodedTitle}</h1>
          <p>
            Rating: <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </p>
          <p className="lead">Price: ₹{price}</p>
          <p>Description:</p>
          <button
            onClick={() => handleAddToCart(decodedImgUrl, decodedTitle, price)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
