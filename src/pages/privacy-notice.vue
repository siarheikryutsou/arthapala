<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "Impressum";

useHead({
  title: "Arthapāla — " + pageTitle.value
});

</script>

<template>
  <section>
    <h2>Updated: 13 March 2024</h2>
    <p>
      <span>Telegram: <a href="https://t.me/Arthapala" class="!no-underline" target="_blank" title="Follow us on Telegram">@arthapala</a></span>
      <br />
      <span>Email: <a href="mailto:info@arthapala.vc" class="!no-underline" target="_blank" title="Contact us by email">info@arthapala.vc</a></span>
    </p>
    <p>Postal address: Antala Staška 1859/34, Krč, 140 00 Praha</p>
  </section>
</template>