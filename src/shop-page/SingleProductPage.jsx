import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ProductDescription from "./ProductDescription";

function SingleProductPage() {
  //single item data
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // console.log(product)
  const singleProduct = product.filter((product) => product.id === id);
//   console.log(singleProduct);
  return (
    <div>
      <PageHeader
        title={"Our Shop Single"}
        currentPage={`Shop/ Single Product`}
      />
      <div className="shop-single  padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <section>
                <div className="product-details">
                  <div className="row align-item-center">
                    <div className="col-md-6 col-12 ">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={
                               { delay: 2000,
                                disableOnInteraction: false}
                            }
                            speed={1000}
                            grabCursor={true}
                            effect={"fade"}
                            fadeEffect={{ crossFade: true }}
                            navigation={{
                                prevEl: ".pro-single-prev",
                                nextEl: ".pro-single-next",
                            }}
                            modules={[ Autoplay]}

                            className="mySwiper"
                          >
                            {singleProduct.map((product, index) => (
                              <SwiperSlide key={index}>
                                <img src={product.img} alt="" />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-right"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-left"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 ">
                        <div className="post-content">
                            <div>
                                {
                                    singleProduct.map((product)=><ProductDescription key={product} product={product}/>)
                                }
                                
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="review">Reviwe</div>
              </section>
            </div>
            <div className="col-lg-4 col-12">right</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;
