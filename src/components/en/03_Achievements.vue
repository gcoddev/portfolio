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
            <div class="col-12 col-md-6" v-for="(train, id) of trains" :key="id">
              <div class="fancy-box" @mouseenter="$store.commit('expandCursor')"
                @mouseleave="$store.commit('expandCursorLeave')">
                <h4>{{ train.name }}</h4>
                <h6 class="sm-heading text-white-04 mb-2">
                  {{ train.period }}
                </h6>
                <p>{{ train.descripcion }}</p>
                <br />
                <div>
                  <a v-for="(ins, id_ins) of train.inst" :key="id_ins" :href="ins.url ? ins.url : 'javascript:void(0);'"
                    :target="ins.url ? '_blank' : ''" :title="ins.name">
                    <img :src="require('@/' + ins.icon)" style="width: 50px;margin-right:10px" alt="" />
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
        <Swiper class="swiper-wrapper" :slides-per-view="slidesPerView" :breakpoints="breakpoints" :modules="modules"
          :navigation="{ prevEl: '.swiper-exp-prev', nextEl: '.swiper-exp-next' }" :pagination="{
            el: '.xp-swiper-pagination3',
            clickable: true,
          }">
          <swiper-slide class="swiper-slide" v-for="(ex, id_ex) of exps" :key="id_ex">
            <div class="testimonial-box">
              <div class="testimonial-avatar">
                <a :href="ex.url" target="_blank" @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')">
                  <img :src="require('@/' + ex.img)" :alt="ex.institution" />
                </a>
              </div>
              <div class="testimonial-content">
                <div class="mb-3">
                  <a :href="ex.url" target="_blank" @mouseenter="$store.commit('expandCursor')"
                    @mouseleave="$store.commit('expandCursorLeave')">
                    <h3>{{ ex.name }}</h3>
                  </a>
                  <span class="sm-heading text-white">
                    <a :href="ex.ins_url" @mouseenter="$store.commit('expandCursor')"
                      @mouseleave="$store.commit('expandCursorLeave')">
                      {{ ex.institution }}
                    </a>
                  </span>
                </div>
                <p class="fs-4 fw-normal fst-italic line-height-140">
                  {{ ex.description }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </Swiper>
        <div class="xp-swiper-pagination3 swiper-pagination" @mouseenter="$store.commit('expandCursor')"
          @mouseleave="$store.commit('expandCursorLeave')"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const trains = require("../training.json");
const exps = require("../exps.json");

export default {
  name: "achievementsView",
  data() {
    return {
      trains,
      exps,
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 25
        }
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>