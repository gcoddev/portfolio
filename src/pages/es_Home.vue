<template>
  <landing-page />
  <services />
  <projects />
  <archievements />
  <!-- <journal /> -->
  <contact />
</template>

<script>
import landingPage from "@/components/es/00_LandingPage.vue";
import services from "@/components/es/01_Services.vue";
import projects from "@/components/es/02_Projects.vue";
import archievements from "@/components/es/03_Achievements.vue";
// import journal from "@/components/es/04_Journal.vue";
import contact from "@/components/es/05_Contact.vue";

export default {
  name: "esHome",
  components: {
    landingPage: landingPage,
    services: services,
    projects: projects,
    archievements: archievements,
    // journal: journal,
    contact: contact,
  },
  created() {
    document.getElementsByTagName("html")[0].setAttribute("lang", "es");
    document.getElementById("btn-lang").innerHTML = "🇧🇴";
    document.getElementById("btn-lang").setAttribute("data-text", "🇧🇴");
    // document
    //   .getElementById("a-lang")
    //   .setAttribute("onclick", "redirectTo('/es')");
    document.getElementById("btn-lang").classList.add("disabled");
    document.getElementById("btn-contact").innerHTML = "CONTACTAME";
    document
      .getElementById("btn-contact")
      .setAttribute("data-text", "CONTACTAME");
    document.getElementById("btn-menu").innerHTML = "MENÚ";
    document.getElementById("btn-menu").setAttribute("data-text", "MENÚ");

    document.getElementById("a-about").innerHTML = "Acerca de";
    document.getElementById("a-services").innerHTML = "Servicios";
    document.getElementById("a-portfolio").innerHTML = "Portafolio";
    document.getElementById("a-awards").innerHTML = "Logros";
    document.getElementById("a-testimonial").innerHTML = "Experiencia";
    // document.getElementById("a-blog").innerHTML = "Blog";
    document.getElementById("a-contact").innerHTML = "Contacto";
    document.getElementById("copyright").innerHTML =
      "Todos los derechos reservados";
  },
};
</script>