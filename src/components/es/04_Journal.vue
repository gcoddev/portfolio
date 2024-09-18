<template>
  <!-- Blog section -->
  <div id="blog" class="section-box">
    <div class="section-sm bg-dark border-radius-1">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <span class="title-heading text-white-04">Journal</span>
            <h1 class="display-3 fw-medium">
              Blog <span class="text-gradient">Posts</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <!-- Slider Nav -->
            <div class="mt-4">
              <div class="swiper-blog-prev button-circle cursor-link">
                <i class="bi bi-arrow-left"></i>
                <i class="bi bi-arrow-left"></i>
              </div>
              <div class="swiper-blog-next button-circle cursor-link">
                <i class="bi bi-arrow-right"></i>
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
            <!-- end Slider Nav -->
          </div>
        </div>
        <!-- end row -->
        <div class="swiper blog-slider mt-4 mt-lg-5">
          <Swiper
            :modules="modules"
            class="swiper-wrapper"
            :slides-per-view="2.5"
            :space-between="50"
            :navigation="{
              prevEl: '.swiper-blog-prev',
              nextEl: '.swiper-blog-next',
            }"
            :pagination="{ clickable: true }"
          >
            <!-- Slide Item 1 -->
            <swiper-slide class="swiper-slide">
              <div class="blog-post-box">
                <div class="blog-post-img">
                  <!-- Image -->
                  <a class="blog-post-img-link" href="#">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </a>
                  <!-- Category -->
                  <div class="blog-post-category">
                    <a href="#">
                      <span data-text="Category">Category</span>
                    </a>
                  </div>
                </div>
                <div class="mt-4">
                  <ul class="list-inline-dot sm-heading text-white mb-2">
                    <li>
                      <a class="link-hover" href="#">
                        <span data-text="by Admin">by Admin</span>
                      </a>
                    </li>
                    <li>
                      <a class="link-hover" href="#">
                        <span data-text="Oct 8">Oct 8</span>
                      </a>
                    </li>
                  </ul>
                  <h2 class="mb-0">
                    <a class="blog-caption" href="#">
                      <i class="bi bi-arrow-right"></i>
                      Blog Post Title
                    </a>
                  </h2>
                </div>
              </div>
            </swiper-slide>
            <!-- Slide Item 2 -->
            <swiper-slide class="swiper-slide">
              <div class="blog-post-box">
                <div class="blog-post-img">
                  <!-- Image -->
                  <a class="blog-post-img-link" href="#">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </a>
                  <!-- Category -->
                  <div class="blog-post-category">
                    <a href="#">
                      <span data-text="Category">Category</span>
                    </a>
                  </div>
                </div>
                <div class="mt-4">
                  <ul class="list-inline-dot sm-heading text-white mb-2">
                    <li>
                      <a class="link-hover" href="#">
                        <span data-text="by Admin">by Admin</span>
                      </a>
                    </li>
                    <li>
                      <a class="link-hover" href="#">
                        <span data-text="Oct 8">Oct 8</span>
                      </a>
                    </li>
                  </ul>
                  <h2 class="mb-0">
                    <a class="blog-caption" href="#">
                      <i class="bi bi-arrow-right"></i>
                      Blog Post Title
                    </a>
                  </h2>
                </div>
              </div>
            </swiper-slide>
            <!-- Slide Item 3 -->
            <swiper-slide class="swiper-slide">
              <div class="blog-post-box">
                <div class="blog-post-img">
                  <!-- Image -->
                  <a class="blog-post-img-link" href="#">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </a>
                  <!-- Category -->
                  <div class="blog-post-category">
                    <a href="#">
                      <span data-text="Category">Category</span>
                    </a>
                  </div>
                </div>
                <div class="mt-4">
                  <ul class="list-inline-dot sm-heading text-white mb-2">
                    <li>
                      <a class="link-hover" href="#">
                        <span data-text="by Admin">by Admin</span>
                      </a>
                    </li>
                    <li>
                      <a class="link-hover" href="#">
                        <span data-text="Oct 8">Oct 8</span>
                      </a>
                    </li>
                  </ul>
                  <h2 class="mb-0">
                    <a class="blog-caption" href="#">
                      <i class="bi bi-arrow-right"></i>
                      Blog Post Title
                    </a>
                  </h2>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
          <!-- end swiper-wrapper -->
        </div>
        <!-- end blog-slider -->
      </div>
      <!-- end container -->
    </div>
  </div>
  <!-- end Blog section -->
</template>

<script>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  name: "journalView",
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