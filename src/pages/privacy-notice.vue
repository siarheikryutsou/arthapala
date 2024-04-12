<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "Privacy Notice";

useHead({
  title: "Arthapāla — " + pageTitle.value
});

</script>

<template>
  <section>
    <h2>Arthapala offers customer specific blockchain solutions.</h2>
    <p>
      Custodial ETH staking as a service for companies and private customers.
    </p>
    <p>No pooling of customer funds. High safety standards.</p>
    <p>We operate according to European regulatory standards. All customers have to pass KYC/AML process during
      registration.</p>
  </section>
</template>