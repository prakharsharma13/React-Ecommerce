import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website allows businesses to showcase and sell products
          or services online. It provides users with a seamless shopping
          experience, including product browsing, secure checkout, and various
          payment options. Features often include product search, user reviews,
          and personalized recommendations, enhancing customer engagement and
          boosting sales.
        </p>
        <p>
          An eCommerce website is an online platform that enables businesses to
          sell products or services directly to customers over the internet. It
          provides a seamless shopping experience by allowing users to browse
          through product catalogs, view detailed descriptions, and make
          purchases with secure payment options. The website is designed to be
          intuitive and user-friendly, often including features like search
          functionality, product filters, and personalized recommendations to
          enhance the customer journey. With mobile responsiveness, customers
          can shop from any device, ensuring convenience and accessibility.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
