<script setup lang="ts">
definePageMeta({
  layout: "main-page"
});
</script>

<template>
  <div class="max-w-[790px] min-h-[655px] mx-auto flex flex-col items-center">
    <img class="hidden md:block" src="/images/logo.svg" alt="Logo">
    <h1 class="text-center text-white text-7xl font-bold mt-36 md:mt-6 max-w-[650px]">Custodial staking of
      Ethereum</h1>

    <div class="mt-72 md:mt-16 flex flex-col xl:flex-row justify-between gap-10 xl:gap-16">

      <div class="max-w-[375px] space-y-6 order-1 xl:order-none">
        <p>Arthapala offers a custodial ETH staking as a service for companies and private customers.</p>
        <p>No pooling of customer funds. High safety standards.</p>
        <p>We operate according to European regulatory standards. All customers have to pass KYC/AML process during
          registration.</p>
      </div>

      <div>
        <ul class="main-list">
          <li>
            <strong>5% fee</strong> of total earnings
          </li>
          <li>
            <strong>32 ETH</strong> minimum delegation
          </li>
          <li>
            monthly payouts
          </li>
        </ul>
      </div>
    </div>

    <a
      class="mt-12 mb-14 py-2 px-8 rounded-full text-white text-lg font-extrabold border border-[#4D93E5] bg-gradient-to-b from-[#3E90F0] to-[#1B6ECF]"
      href="#"
      aria-label="">
      Get started
    </a>
  </div>
</template>
