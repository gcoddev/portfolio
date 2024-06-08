<template>
  <div id="awards" class="section pb-0">
    <div class="container">
      <div class="row g-4 g-xl-5">
        <div class="col-12 col-xl-4">
          <span class="title-heading text-white-04">Achievements</span>
          <h1 class="display-3 fw-medium mb-0">
            Train<span class="text-gradient">ing</span>
          </h1>
        </div>
        <div class="col-12 col-xl-8">
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="fancy-box">
                <h4>Bachelor's degree in systems engineering</h4>
                <h6 class="sm-heading text-white-04 mb-2">2020 - current</h6>
                <p>Studies in systems engineering.</p>
                <br />
                <div>
                  <a href="https://www.upea.bo" target="_blank">
                    <img
                      src="@/assets/icons/upea.png"
                      style="width: 50px"
                      alt=""
                    />
                  </a>
                  <a href="https://sistemas.upea.edu.bo" target="_blank">
                    <img
                      src="@/assets/icons/sistemas.png"
                      style="width: 40px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="fancy-box">
                <h4>Computer systems technician</h4>
                <h6 class="sm-heading text-white-04 mb-2">2017 - 2019</h6>
                <p>Intermediate knowledge in computer systems</p>
                <br />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="fancy-box">
                <h4>FullStack web developer</h4>
                <h6 class="sm-heading text-white-04 mb-2">2020 - current</h6>
                <p>
                  Knowledge of FrontEnd and BackEnd software development
                  (FullStack).
                </p>
                <br />
                <div>
                  <a href="https://plazi.com" target="_blank">
                    <img
                      src="@/assets/icons/platzi.png"
                      style="width: 40px"
                      alt=""
                    />
                  </a>
                  <a href="https://udemy.com" target="_blank">
                    <img
                      src="@/assets/icons/udemy.png"
                      style="width: 55px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="testimonial" class="section">
    <div class="container">
      <h1 class="display-5 fw-medium mb-0">
        Exper<span class="text-gradient">ience</span>
      </h1>
      <br />
      <div class="swiper testimonial-slider">
        <Swiper class="swiper-wrapper" :slides-per-view="1" :space-between="50">
          <swiper-slide class="swiper-slide">
            <div class="testimonial-box">
              <div class="testimonial-avatar">
                <img src="@/assets/icons/utic.png" alt="U-TIC" />
              </div>
              <div class="testimonial-content">
                <div class="mb-3">
                  <a href="https://utic.upea.bo" target="_blank">
                    <h3>UTIC</h3>
                  </a>
                  <span class="sm-heading text-white">UPEA</span>
                </div>
                <p class="fs-4 fw-normal fst-italic line-height-140">
                  Technician in web software development and microservices.
                </p>
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "achievementsView",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>