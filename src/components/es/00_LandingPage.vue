<template>
  <div id="about" class="hero-section">
    <div class="container text-center">
      <div class="row">
        <div class="col-12">
          <h1
            class="hero-heading display-1 fw-bold mb-0 stroke-tex"
            id="name-typing"
          ></h1>
          <span class="cursor-type" id="cursor-type"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row g-4 g-md-5">
      <div class="col-12 col-lg-4 order-lg-2 text-center">
        <!-- Hero Avatar -->
        <div class="hero-avatar">
          <img src="@/assets/logo.png" alt="Logo" />
        </div>
      </div>
      <div class="col-12 col-lg-4 order-lg-1">
        <div class="row g-4 g-lg-5">
          <div class="col-12 col-md-4 col-lg-12">
            <h6 class="sm-heading">Biografía</h6>
            <p>
              Estudiante autodidacta, instructor y desarrollador freelance en mi
              tiempo libre. Soy una persona responsable y comprometida, me gusta
              aprender, especialmente compartir mi conocimiento.
            </p>
          </div>
          <div class="col-6 col-md-4 col-lg-12">
            <h6 class="sm-heading">Habilidades</h6>
            <ul class="list-inline-dot">
              <li>Desarrollo Web</li>
              <li>FullStack</li>
              <li>Aplicaciones Móviles</li>
              <li>Administrador de Sistemas</li>
              <li>DBA</li>
              <li>Redes</li>
              <li>Hacking Ético</li>
              <li>Seguridad</li>
              <li>DevOps</li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-12">
            <h6 class="sm-heading">Portafolio</h6>
            <ul class="list-inline">
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="https://github.com/gcoddev"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-github"></i>
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="https://gitlab.com/gcoddev"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-gitlab"></i>
                  <i class="bi bi-gitlab"></i>
                </a>
              </li>
              <li>
                <a
                  class="button-circle button-circle-sm expand"
                  href="https://www.linkedin.com/in/gcoddev"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-linkedin"></i>
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-4 order-lg-3 text-lg-end">
        <div class="row g-4 g-lg-5">
          <div class="col-6 col-lg-12">
            <h6 class="sm-heading">Proyectos Realizados</h6>
            <h1 class="fw-light display-4 mb-0 line-height-110">
              {{ projects.length }}+
            </h1>
          </div>
          <div class="col-6 col-lg-12">
            <h6 class="sm-heading">Años de Experiencia</h6>
            <h1 class="fw-light display-4 mb-0 line-height-110">
              {{ experience }}+
            </h1>
          </div>
          <div class="col-12 col-md-4 col-lg-12">
            <h6 class="sm-heading">Centro Social</h6>
            <ul class="list-inline">
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="mailto:gary7apaza@gcod.dev?subject=Mensaje"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-envelope-fill"></i>
                  <i class="bi bi-envelope-fill"></i>
                </a>
              </li>
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="https://www.youtube.com/@gcoddev"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-youtube"></i>
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="https://www.facebook.com/gcoddev/"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="https://x.com/gcoddev"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-twitter-x"></i>
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                <a
                  class="button-circle button-circle-sm"
                  href="https://www.instagram.com/gcoddev7"
                  target="_blank"
                  @mouseenter="$store.commit('expandCursor')"
                  @mouseleave="$store.commit('expandCursorLeave')"
                >
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#name-typing {
  white-space: pre;
  display: inline;
}

.cursor-type {
  display: inline-block;
  width: 5px;
  height: 7rem;
  background-color: white;
  animation: blink 0.7s step-end infinite;
  margin-left: 5px;
}

@keyframes blink {
  from,
  to {
    background-color: transparent;
  }
  50% {
    background-color: white;
  }
}
</style>

<script>
const proys = require("../projects.json");

export default {
  name: "LandingPage",
  data() {
    return {
      name: "Gary Apaza",
      index: 0,
      projects: proys,
    };
  },
  computed: {
    experience() {
      let actual = new Date();
      let year = actual.getFullYear();
      return year - 2022;
    },
  },
  methods: {
    typing() {
      if (this.index < this.name.length) {
        document.getElementById("name-typing").innerHTML += this.name.charAt(
          this.index
        );
        this.index++;
        setTimeout(this.typing, 100);
      } else {
        document.getElementById("cursor-type").style.display = "none";
        document
          .getElementById("a-lang")
          .setAttribute("onclick", "redirectTo('/en')");
        document
          .getElementById("a-index")
          .setAttribute("onclick", "redirectTo('/')");
      }
    },
  },
  created() {
    document.getElementsByTagName("body")[0].classList.remove("loaded");
    document.getElementById("a-index").removeAttribute("onclick");
  },
  mounted() {
    document.getElementById("name-typing").innerHTML = "";
    this.index = 0;
    this.typing();
    document.getElementsByTagName("body")[0].classList.add("loaded");
  },
};
</script>
