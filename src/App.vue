<template>
  <router-view />
</template>

<script>
export default {
  name: "AppView",
  methods: {
    async getStatus() {
      try {
        const res = await this.axios.get("/");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    if (document.getElementsByTagName("body")[0] === "true") {
      document
        .getElementsByTagName("body")[0]
        .append(
          "<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"
        );
    }
    this.getStatus();
    this.axios
      .get(
        "https://api.ipgeolocation.io/ipgeo?apiKey=" +
        process.env.VUE_APP_API_GEO_KEY
      )
      .then((response) => {
        // console.log(response);

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