<template>
  <div></div>
</template>

<script>
export default {
  name: "nullHome",
  created() {
    document.getElementsByTagName("body")[0].classList.remove("loaded");
    document.getElementById("a-index").removeAttribute("onclick")
    this.axios
      .get(
        "https://api.ipgeolocation.io/ipgeo?apiKey=" +
          process.env.VUE_APP_API_GEO_KEY
      )
      .then((response) => {
        const region = response.data.country_code2;
        if (
          region === "MX" ||
          region === "AR" ||
          region === "CO" ||
          region === "CL" ||
          region === "PE" ||
          region === "VE" ||
          region === "UY" ||
          region === "PY" ||
          region === "BO" ||
          region === "EC"
        ) {
          document.getElementsByTagName("html")[0].setAttribute("lang", "es");
          this.$router.push("/es");
        } else {
          document.getElementsByTagName("html")[0].setAttribute("lang", "en");
          this.$router.push("/en");
        }
      })
      .catch((error) => {
        console.error("Error fetching geolocation data:", error);
        document.getElementsByTagName("html")[0].setAttribute("lang", "en");
        this.$router.push("/en");
      });
  },
};
</script>