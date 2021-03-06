import React from "react";
import ReactDOM from 'react-dom'
import "./main2.scss";
import MainVideo from "../../../src/images/file.mp4";
import CieloImage from "../../../src/images/TheCieloStory.webp";
import CollectionImage from "../../../src/images/ViewOurCollections.webp";
import JoinImage from "../../../src/images/JoinOurCom.webp";
import Product1 from "../../../src/images/goods1.webp";
import Product2 from "../../../src/images/goods2.webp";
import Product3 from "../../../src/images/goods3.webp";
import Product4 from "../../../src/images/goods4.webp";

function Main() {
    return (
        <main className="main">
            <div className="main-container">
                <div className="tiles">
                    <div className="tile">
                        <h2 className="shop-tile">Introducing Your New Workout Wardrobe</h2>
                        <button className="shop-button">Start Shopping</button>
                    </div>
                    <div className="tile feature">
                        <video autoPlay muted loop src={MainVideo} type="video/mp4" />
                    </div>
                    <div className="tile">
                        <img src={CieloImage} alt="The Cielo Story" />
                        <a href="#" className="tile__text">The Cielo Story</a>
                    </div>
                    <div className="tile">
                        <img src={CollectionImage} alt="View Our Collection" />
                        <a href="#" className="tile__text">View Our Collection</a>
                    </div>
                    <div className="tile">
                        <img src={JoinImage} alt="Join Our Community" />
                        <a href="#" className="tile__text">Join Our Community</a>
                    </div>
                </div>

                <h2 className="latest-heading">LATEST ARRIVALS</h2>
                <div className="product-list">
                    <div className="product">
                        <img className="product-image" src={Product1} alt="" />
                        <h3 className="product-name">Running Top</h3>
                        <hr className="product-line"></hr>
                        <h3 className="product-price">19,00???</h3>
                    </div>

                    <div className="product">
                        <img className="product-image" src={Product2} alt="" />
                        <h3 className="product-name">Running Top</h3>
                        <hr className="product-line"></hr>
                        <h3 className="product-price">19,00???</h3>
                    </div>

                    <div className="product">
                        <img className="product-image" src={Product3} alt="" />
                        <h3 className="product-name">Running Top</h3>
                        <hr className="product-line"></hr>
                        <h3 className="product-price">19,00???</h3>
                    </div>

                    <div className="product">
                        <img className="product-image" src={Product4} alt="" />
                        <h3 className="product-name">Running Top</h3>
                        <hr className="product-line"></hr>
                        <h3 className="product-price">19,00???</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
