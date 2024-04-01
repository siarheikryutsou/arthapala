<template>
  <header class="flex items-center justify-between md:justify-end p-8 bg-[#1B6ECF] md:bg-transparent">

    <img class="md:hidden" src="/images/logo_mobile.svg" alt="Logo" />

    <nav class="flex gap-6">
      <a href="https://x.com/" target="_blank" aria-label="Read us on Twitter">
        <nuxt-icon filled name="x" />
      </a>
      <a href="https://telegram.org/" target="_blank">
        <nuxt-icon filled name="tg" />
      </a>
    </nav>
  </header>

  <main class="px-6">
    <NuxtPage />
  </main>

  <footer class="py-6 px-6 md:px-20 text-white text-xs flex flex-col xl:flex-row xl:justify-between xl:items-end space-y-5 w-full">
    <nav class="mx-auto md:mx-0">
      <ul class="footer-contacts-list">
        <li class="">
          <a href="mailto:info@arthapala.vc" target="_blank">
            <nuxt-icon filled name="mail" />
            <span>info@arthapala.vc</span>
          </a>
        </li>
        <li>
          <a href="https://maps.app.goo.gl/kdyzd4CcQ4ispkyy8" target="_blank" rel="noopener noreferrer">
            <nuxt-icon filled name="geo" />
            <span>PARALELNÍ POLIS, z.s., Dělnická 475/43, 170 00 Praha 7 Holešovice</span>
          </a>
        </li>
      </ul>
    </nav>

    <nav>
      <ul class="flex flex-col items-center gap-8 underline mt-16 md:mt-0 pb-0.5 text-sm md:text-xs md:flex-row md:items-start">
        <li>
          <nuxt-link to="/terms-and-conditions">Terms and Conditions</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/terms-and-conditions">General Risk Warning</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/terms-and-conditions">List of Prohibited Countries</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/terms-and-conditions">Impressum</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<script setup lang="ts">
</script>