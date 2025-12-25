import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const product = ["/product-placeholder.png", "/product-placeholder.png", "/product-placeholder.png", "/product-placeholder.png"];

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mb-4 rounded-lg object-cover"
      >
        {product?.map((img) => (
          <SwiperSlide>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper onSwiper={setThumbsSwiper} slidesPerView={4} watchSlidesProgress={true} modules={[FreeMode, Thumbs]} className="sliderThumbs">
        {product?.map((img) => (
          <SwiperSlide>
            <img className="rounded-lg" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
