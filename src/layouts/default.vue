<script setup lang="ts">
const pageTitle = useState("pageTitle");

function goBack(): void {
  window.history.back();
}
</script>

<template>
  <div id="inner-page">

    <header class="pt-14 pb-6 px-7 md:px-0">
      <div class="inner-page-width">
        <nuxt-link to="/" class="contents">
          <img class="hidden md:block mb-2" src="/images/logo_mobile.svg" alt="Arthapala's logo" />
          <img class="block -ml-8 -mt-14 mb-3 md:hidden" src="/images/logo_header_mobile.svg" alt="Arthapala's logo" />
        </nuxt-link>
        <div class="flex">
          <button @click="goBack">
            <nuxt-icon class="mr-8 md:mr-0 md:-mx-12" name="back" filled />
          </button>
          <h1 class="text-4xl text-white font-medium">{{ pageTitle }}</h1>
        </div>
      </div>
    </header>

    <main>
      <div class="page-container">
        <NuxtPage />
      </div>
    </main>

    <footer class="flex justify-center mb-6">
      <FooterNav />
    </footer>
  </div>
</template>