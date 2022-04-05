<template>

  <div class="container">
  <footer
    class="
      d-flex
      flex-wrap
      justify-content-between
      align-items-center
      py-3
      my-4
      border-top
    "
  >
    <div class="col-md-4 d-flex align-items-center">
      <span>© 2022 Bella Vue - Massas Artesanais, Inc</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a href="https://www.instagram.com/" target="_blank">
          <img
            class="bi"
            width="40"
            height="40"
            :src="require('/src/assets/instagram-icone-gris.png')"
        /></a>
      </li>
      <li class="ms-3">
        <a href="https://wa.me/+553299999999" target="_blank">
          <img
            class="bi"
            width="40"
            height="40"
            :src="require('/src/assets/wpp.png')"
        /></a>
      </li>
    </ul>
  </footer>
  </div>  
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
