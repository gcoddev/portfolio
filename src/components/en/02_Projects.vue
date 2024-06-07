<template>
  <div id="portfolio" class="section-box">
    <div class="section-sm bg-dark border-radius-1">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <span class="title-heading text-white-04">Portfolio</span>
            <h1 class="display-3 fw-medium">
              Recent <span class="text-gradient">Works</span>
            </h1>
            <p>My completed projects.</p>
            <div class="mt-4">
              <div
                class="swiper-portfolio-prev button-circle cursor-link"
                @mouseenter="$store.commit('expandCursor')"
                @mouseleave="$store.commit('expandCursorLeave')"
              >
                <i class="bi bi-arrow-left"></i>
                <i class="bi bi-arrow-left"></i>
              </div>
              <div
                class="swiper-portfolio-next button-circle cursor-link"
                @mouseenter="$store.commit('expandCursor')"
                @mouseleave="$store.commit('expandCursorLeave')"
              >
                <i class="bi bi-arrow-right"></i>
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper portfolio-slider mt-4 mt-lg-5">
          <Swiper
            :modules="modules2"
            class="swiper-wrapper"
            :slides-per-view="slidesPerView2"
            :breakpoints="breakpoints2"
            :navigation="{
              prevEl: '.swiper-portfolio-prev',
              nextEl: '.swiper-portfolio-next',
            }"
            :pagination="{ el: '.custom-swiper-pagination', clickable: true }"
          >
            <swiper-slide
              class="swiper-slide"
              v-for="(pro, id_pro) of projects"
              :key="id_pro"
            >
              <div class="portfolio-box">
                <div class="portfolio-img">
                  <a href="javascript:void(0)">
                    <img :src="require('@/' + pro.img)" alt="" />
                  </a>
                </div>
                <div class="pt-4">
                  <ul class="list-inline-dot sm-heading text-white mb-2">
                    <li v-for="(tag, id_tag) of pro.tags" :key="id_tag">
                      <a class="link-hover" href="javascript:void(0)">
                        <span :data-text="tag">{{ tag }}</span>
                      </a>
                    </li>
                  </ul>
                  <h2>
                    <a class="portfolio-caption" href="javascript:void(0)">
                      <i class="bi bi-arrow-right"></i>
                      {{ pro.name }}
                    </a>
                  </h2>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const proys = require("../projects.json");

export default {
  name: "projectsView",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      projects: proys,
      slidesPerView2: 2.5,
      breakpoints2: {
        320: {
          slidesPerView2: 1,
          spaceBetween: 5,
        },
        480: {
          slidesPerView2: 1.5,
          spaceBetween: 10,
        },
        640: {
          slidesPerView2: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView2: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView2: 2.5,
          spaceBetween: 25,
        },
      },
    };
  },
  setup() {
    return {
      modules2: [Navigation, Pagination],
    };
  },
};
</script>