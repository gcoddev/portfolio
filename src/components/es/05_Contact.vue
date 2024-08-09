<template>
  <div id="contact" class="section pb-0">
    <div class="container">
      <div class="row g-4 g-xl-5">
        <div class="col-12 col-xl-4">
          <span class="title-heading text-white-04">Contacto</span>
          <h1 class="display-3 fw-medium mb-0">
            Habl<span class="text-gradient">emos</span>
          </h1>
        </div>
        <div class="col-12 col-xl-8">
          <div class="row g-4 g-lg-5">
            <div class="col-12 col-md-6">
              <h6 class="sm-heading">Email:</h6>
              <h3 class="mb-0">gary7apaza@gcod.dev</h3>
            </div>
            <div class="col-12 col-md-6">
              <h6 class="sm-heading">Whatsapp:</h6>
              <a
                href="https://api.whatsapp.com/send/?phone=59176787696&text=Hola+Gary"
                target="_blank"
                class="button button-dot"
              >
                <h5 class="mb-0">
                  <i class="bi bi-whatsapp"></i>
                  &nbsp;+591 76787696
                </h5>
              </a>
            </div>
          </div>
          <div class="contact-form mt-4 mt-lg-5 text-xl-end">
            <form
              method="post"
              id="contactform"
              action="https://formspree.io/f/mjvnqzdo"
            >
              <div class="row gx-3 gy-0">
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Mensaje"
              ></textarea>
              <button class="button button-dot" type="submit">
                <span data-text="Enviar mensaje">Enviar mensaje</span>
              </button>
            </form>
            <div class="submit-result">
              <span id="success">¡Gracias! Tu mensaje ha sido enviado.</span>
              <span id="error"
                >¡Algo salió mal. Por favor, vuelva a intentarlo!</span
              >
            </div>
          </div>
        </div>
      </div>
      <div id="map1" class="gmap gmap-md border-radius-1 mt-5"></div>
    </div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: "contactView",
  data() {
    return {
      map: null,
    };
  },
  methods: {
    loadGoogleMaps() {
      const loader = new Loader({
        apiKey: process.env.VUE_APP_API_MAPS_KEY,
        version: "weekly",
      });

      loader
        .load()
        .then((google) => {
          this.initMap(google);
        })
        .catch((e) => {
          console.error("Error al cargar la API de Google Maps", e);
        });
    },
    initMap(google) {
      this.map = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: -16.480784, lng: -68.283376 },
        zoom: 16,
      });
    },
  },
  mounted() {
    this.loadGoogleMaps();
  },
};
</script>