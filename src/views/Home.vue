<template>
  <div>
    <div class="image-wrapper">
      <img src="../assets/homebanner.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.image-wrapper {
  height: calc(100vh - 60px);
  width: 100%;
  overflow: hidden;
}
.image-wrapper img {
  width: 100%;
  height: auto;
}
</style>
