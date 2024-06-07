<template>
  <router-view />
</template>

<script>
export default {
  name: "AppView",
  created() {
    if (document.getElementsByTagName("body")[0] === "true") {
      document
        .getElementsByTagName("body")[0]
        .append(
          "<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"
        );
    }
  },
};
</script>