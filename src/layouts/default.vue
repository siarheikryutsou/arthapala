<script setup lang="ts">
const pageTitle = useState("pageTitle");

function goBack(): void {
  window.history.back();
}
</script>

<template>
  <div id="inner-page">

    <header class="pt-14 pb-6 px-7 lg:px-0">
      <div class="inner-page-width">
        <nuxt-link to="/" class="contents">
          <img class="hidden lg:block mb-2" src="/images/logo_mobile.svg" alt="Arthapala's logo" />
          <img class="block -ml-8 -mt-14 mb-3 lg:hidden" src="/images/logo_header_mobile.svg" alt="Arthapala's logo" />
        </nuxt-link>
        <div class="flex">
          <button @click="goBack">
            <nuxt-icon class="mr-8 lg:mr-0 lg:-mx-12" name="back" filled />
          </button>
          <h1 class="text-4xl text-white font-medium">{{ pageTitle }}</h1>
        </div>
      </div>
    </header>

    <main>
      <article class="page-container">
        <NuxtPage />
      </article>
    </main>

    <footer class="flex justify-center mb-6">
      <FooterNav />
    </footer>
  </div>
</template>