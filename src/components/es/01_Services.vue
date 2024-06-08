<template>
  <div id="services" class="section">
    <div class="container">
      <div class="row g-4 g-xl-5">
        <div class="col-12 col-xl-4">
          <span class="title-heading text-white-04">Servicios</span>
          <h1 class="display-3 fw-medium mb-0">
            Lo que <span class="text-gradient">hago</span>
          </h1>
        </div>
        <div class="col-12 col-xl-8">
          <div class="row g-4">
            <div class="col-12">
              <div class="service-box">
                <div class="service-order">
                  <h3>01/</h3>
                </div>
                <div class="service-title">
                  <i class="bi bi-code-slash"></i>
                  <h3>Desarrollo</h3>
                </div>
                <div class="service-text">
                  <p>
                    Experto en desarrollo web FrontEnd y BackEnd (FullStack)
                    utilizando marcos y tecnologías modernos.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="service-box">
                <div class="service-order">
                  <h3>02/</h3>
                </div>
                <div class="service-title">
                  <i class="bi bi-code-slash"></i>
                  <h3>Administración de sistemas</h3>
                </div>
                <div class="service-text">
                  <p>
                    Competente en Linux, GitHub, prácticas de DevOps, servidor.
                    herramientas de gestión, networking y automatización.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="service-box">
                <div class="service-order">
                  <h3>03/</h3>
                </div>
                <div class="service-title">
                  <i class="bi bi-laptop"></i>
                  <h3>Seguridad y Automatización</h3>
                </div>
                <div class="service-text">
                  <p>
                    Experiencia en hacking ético, proyectos Arduino y ofimatica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section pt-0">
    <div class="container">
      <div class="col-12 col-xl-4">
        <h2 class="display-6 fw-medium mb-0">
          Mis cono<span class="text-gradient">cimientos</span>
        </h2>
      </div>
      <br>
      <div class="swiper-navigation">
        <input
          type="search"
          id="search"
          class="input-search"
          placeholder="Buscar curso"
          v-model="search"
          @keyup="filterTechnologies()"
        />
        <div
          class="swiper-xp-prev button-circle cursor-link"
          @mouseenter="$store.commit('expandCursor')"
          @mouseleave="$store.commit('expandCursorLeave')"
        >
          <i class="bi bi-arrow-left"></i>
          <i class="bi bi-arrow-left"></i>
        </div>
        <div
          class="swiper-xp-next button-circle cursor-link"
          @mouseenter="$store.commit('expandCursor')"
          @mouseleave="$store.commit('expandCursorLeave')"
        >
          <i class="bi bi-arrow-right"></i>
          <i class="bi bi-arrow-right"></i>
        </div>
      </div>
      <div class="swiper clients-slider">
        <Swiper
          class="swiper-wrapper"
          :slides-per-view="slidesPerView"
          :breakpoints="breakpoints"
          :modules="modules"
          :navigation="{ prevEl: '.swiper-xp-prev', nextEl: '.swiper-xp-next' }"
          :pagination="{
            el: '.xp-swiper-pagination',
            clickable: true,
          }"
        >
          <swiper-slide
            class="swiper-slide"
            v-for="(tech, id_tech) of technologies"
            :key="id_tech"
          >
            <div class="client-box" :title="tech.name">
              <a href="javascript:void(0)">
                <img :src="require('@/' + tech.img)" alt="" class="img-tech" />
              </a>
            </div>
          </swiper-slide>
        </Swiper>
        <div class="xp-swiper-pagination swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-navigation {
  display: flex;
  margin-bottom: 20px;
  position: relative;
}
.swiper-navigation .input-search {
  width: 25%;
  margin: auto 10px;
}

.swiper-pagination-bullet {
  background: white;
  cursor: pointer;
  margin: 0 5px;
}

.img-tech {
  opacity: 0.5 !important;
  border-radius: 10px;
  border: 1px solid #181a1c;
}

.img-tech:hover {
  opacity: 1 !important;
}

.client-box img[title]::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
}

.client-box img[title]:hover::after {
  visibility: visible;
  opacity: 1;
}

.cursor-link {
  cursor: pointer;
}

.label-search {
  position: absolute;
  top: 25%;
  left: 2%;
}

.swiper-xp-next {
  margin-left: 5px;
}
</style>

<script>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const techs = require("../technologies.json");

export default {
  name: "servicesView",
  data() {
    return {
      search: "",
      techs2: techs,
      technologies: [],
      slidesPerView: 5,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    filterTechnologies() {
      if (this.search) {
        this.technologies = techs.filter((tech) => {
          return tech.tags.some((tag) =>
            tag.includes(this.search.toLowerCase())
          );
        });
      } else {
        this.technologies = techs;
      }
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  created() {
    this.search = "";
  },
  mounted() {
    this.search = "";
    this.filterTechnologies();
  },
};
</script>