<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "Terms and Conditions";

useHead({
  title: "Arthapāla — " + pageTitle.value
});

</script>

<template>
  <section>
    <h2>Updated: 14 April 2024</h2>
    <p>These Terms constitute a legally binding agreement between you (“you” or “your”) and Arthapala (“Arthapala”, “we”, “our” or “us”). The Terms govern your use of the Arthapala Services made available to you on or through the Platform or otherwise. Arthapala Services may be provided by Arthapala or, if specified in these Terms, any Product Terms or any additional terms, by any Arthapala Affiliate.</p>
    <p>By registering for an Arthapala Account, accessing the Platform and/or using the Arthapala Services, you agree that you have read, understood and accepted these Terms, together with any additional documents or terms referred to in these Terms. You acknowledge and agree that you will be bound by and will comply with these Terms, as updated and amended from time to time.</p>
    <p>If you do not understand and accept these Terms in their entirety, you should not register for an Arthapala Account or access or use the Platform or any Arthapala Service.</p>
  </section>
  <section class="warning">
    <h2>RISK WARNING</h2>
    <p>As with any asset, the value of Digital Assets can fluctuate significantly and there is a material risk of
      economic loss when buying, selling, holding or investing in Digital Assets. You should therefore consider whether
      trading or holding Digital Assets is suitable for you in light of your financial circumstances.</p>
    <p>Further information on the risks associated with using the Arthapala Services is set out in our
      <nuxt-link to="/general-risk-warning">Risk Warning</nuxt-link>
      , which may be updated from time to time. You should read the Risk Warning carefully, however it does not explain
      all of the risks that may arise, or how such risks relate to your personal circumstances.
    </p>
    <p>It is important that you fully understand the risks involved before making a decision to use the Arthapala
      Services.</p>
  </section>

  <section>
    <p>We are not your broker, intermediary, agent, or advisor, and we have no fiduciary relationship or obligation to
      you in connection with any Transactions or other activities you undertake when using the Arthapala Services. We do
      not provide investment or consulting advice of any kind, and no communication or information that we provide to
      you is intended as, or should be construed as, advice of any kind.</p>
    <p>It is your responsibility to determine whether any investment, investment strategy, or related transaction is
      appropriate for you according to your personal investment objectives, financial circumstances, and risk tolerance,
      and you are responsible for any associated loss or liability. We do not recommend that any Digital Asset should be
      bought, earned, sold, or held by you. Before making the decision to buy, sell, or hold any Digital Asset, you
      should conduct your own due diligence and consult your financial advisor. We are not responsible for the decisions
      you make to buy, earn, sell, or hold Digital Assets based on the information provided by us, including any losses
      you incur arising from those decisions.</p>
  </section>
</template>