<template>
  <div></div>
</template>

<script>
export default {
  name: "nullHome",
  created() {
    document.getElementsByTagName("body")[0].classList.remove("loaded");
    document.getElementById("a-index").removeAttribute("onclick")
    
  },
};
</script>