<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "List of Prohibited Countries";

useHead({
  title: "Arthapāla — " + pageTitle.value
});

</script>

<template>
  <section>
    <h2>Updated: 13 March 2024</h2>
    <p>The below Countries, and such other locations as designated by Binance from time to time, form the List of Prohibited Countries as described in Terms of Use</p>
    <ul>
      <li>Canada</li>
      <li>Netherlands</li>
      <li>United States</li>
      <li>Cuba</li>
      <li>Democratic People’s Republic of North Korea (“DPRK”)</li>
      <li>Iran</li>
      <li>Syria</li>
      <li>Crimea region and any non-government controlled areas of Ukraine</li>
    </ul>
    <p>Arthapala understands that corporate entities may be connected to the United States in a variety of ways.</p>
  </section>
</template>