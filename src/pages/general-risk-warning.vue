<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "General Risk Warning";

useHead({
  title: "Arthapāla — " + pageTitle.value
});
</script>

<template>
  <section>
    <h2>Updated: 14 April 2024</h2>
    <p>This document summarizes the principal risks associated with the use of ETH staking and related cryptoasset
      custodial management services and the general risks associated with the ownership and holding of cryptoassets. We
      recommend that you read this information carefully before entering into a contract and using our services.
      ny outstanding taxes.</p>
  </section>

  <section class="warning">
    <h2>PREAMBLE</h2>
    <h3>General Information</h3>
    <p>Dealing with cryptoassets involves a significant amount of risk, therefore, should only be undertaken if you are
      capable of evaluating the risks involved and able to bear such risks. You should only deal with cryptoassets where
      you have carefully considered the risks involved.
      Non-exhaustive List of Risks. Please, carefully consider the following risks. This list is not exhaustive and may
      not include all the risks associated with dealing in cryptoassets.
    </p>
    <h3>No Personal Advice</h3>
    <p>We do not offer personal advice regarding the acquisition, holding, trading of cryptoassets and using our
      services. This document does not include a personalized risk assessment of our services for you. It is intended as
      a general risk warning and does not address specific risks that may arise from your personal situation or needs.
      Please consider any additional risks that may arise from your personal economic situation or other specific
      circumstances.
      No Professional Advice. This document does not provide legal, regulatory, accounting, tax, or investment advice.
      If necessary, it is recommended that you seek independent counsel when using our services and dealing with
      cryptoassets.</p>
  </section>

  <section>
    <h2>RISKS ASSOCIATED WITH CRYPTOASSETS</h2>
    <h3>Volatility Risk</h3>
    <p>The value of cryptoassets is subject to substantial and rapid fluctuations, and these changes may occur
      unexpectedly.</p>
    <h3>Liquidity Risk</h3>
    <p>Cryptoassets may have limited liquidity, making it difficult to sell them. Liquidity can change unexpectedly and
      rapidly.</p>
    <h3>Currency Risk</h3>
    <p>The monetary value of cryptoassets depends on the value of the chosen reference currency and, where applicable,
      currency exchange rates.
      Economic Cycle Risk. Cryptoassets are a relatively new instrument with unknown and unpredictable relationships to
      the economic cycle and may behave unpredictably in relation to the general economic cycle, or in relation to
      developments within a specific economy sector, and may follow or go against such a cycle, or develop
      independently.
      Regulatory Risk. Dealing with cryptoassets and providing related services is currently mostly unregulated without
      the supervision of public authorities. However, the regulatory landscape is developing rapidly, and new
      regulations may be adopted that could affect the provision of our services or the legal requirements for acquiring
      and holding cryptoassets. Changes in the regulatory landscape may also affect the value of cryptoassets and their
      availability in certain countries.
    </p>

    <h3>Political Risk</h3>
    <p>Changes in the political situation, both globally and in certain regions or countries, may affect the value of
      cryptoassets and the regulation, legality, operation and enforceability of obligations related to
      cryptoassets.</p>
  </section>

  <section>
    <h2>RISKS ASSOCIATED WITH CRYPTOASSETS</h2>
    <h3>Distributed Nature of DLT</h3>
    <p>Distributed ledger technologies, upon which cryptoassets are based, may exhibit varying levels of
      decentralization. As a result, there may not be any single entity responsible for the operation and development of
      the network. We have no control or influence over the operation and development of the network.</p>
    <h3>Network Dependence</h3>
    <p>Any dealing with cryptoassets including provision of our services depends on proper operation of the underlaying
      DLT network.</p>
    <h3>Changes in Underlaying Technology</h3>
    <p>Operation of DLT network changes continuously as the source code develops. Any development of the source code is
      beyond our control or influence, but it may influence provision of our services or value of cryptoassets.</p>
    <h3>Irreversibility of Transactions</h3>
    <p>Cryptoasset transactions are irreversible. It may not be possible to recover stolen cryptoassets or cryptoassets
      lost due to transaction error.</p>
    <h3>Cybersecurity Risks</h3>
    <p>Cryptoassets are disposed of using a cryptographic key. Anyone with access to such a key can authorize
      transactions with cryptoassets. Therefore, cryptoassets are vulnerable to security risks if the confidentiality of
      the cryptographic key is breached. Additional cybersecurity risks might arise out of vulnerabilities in the
      underlying DLT and its code. Exploitation of security vulnerabilities may result in loss of cryptoassets.</p>
  </section>

  <section>
    <h2>STAKING RISKS</h2>
    <h3>Changes in Consensus Mechanism</h3>
    <p>Staking depends on the consensus mechanism used by the relevant cryptoasset DLT network. This mechanism may
      change, which could affect how staking proceeds are distributed, their amount or result in the suspension of
      staking altogether.</p>
    <h3>Cooldown Period</h3>
    <p>Cryptoassets used for staking are locked in the validator node and can only be retrieved after relevant cooldown
      periods. The length of these periods may vary depending on the cryptoasset DLT network.</p>
    <h3>Variability of Proceeds</h3>
    <p>Proceeds from staking depend on the number of transactions in the relevant cryptoasset DLT network within a
      certain timeframe or on other variables. Therefore, the proceeds from staking are not guaranteed and are subject
      to significant fluctuations over time.</p>
    <h3>Slashing Risk</h3>
    <p>In certain circumstances, as determined by the cryptoasset DLT network, the cryptoassets locked in the validator
      node may be subject to slashing. This means that the staked cryptoassets may be partially or fully lost as a
      penalty for violating the set conditions.</p>
  </section>

  <section>
    <h2>SERVICE SPECIFIC RISKS</h2>
    <h3>No Insurance</h3>
    <p>We are not obligated to insure the cryptoassets under our management, and there is no statutory insurance scheme
      in place to reimburse you in case of any loss of cryptoassets.</p>
    <h3>Custodial Management</h3>
    <p>During the provision of our services, we manage the cryptoassets as specified in the contract. You can regain
      control of the cryptoassets subject to the agreed-upon conditions.</p>
    <h3>Reasonable Security Measures</h3>
    <p>We implement technologically and economically reasonable security measures to prevent the loss of cryptoassets
      under our management. However, no security measures are infallible, and security breaches may result in partial or
      complete loss of cryptoassets.</p>
    <h3>Insolvency</h3>
    <p>In the event of our insolvency, the recovery of any cryptoassets under our management may be subject to statutory
      proceedings.
    </p>
    <h3>Limited Liability</h3>
    <p>We have only a limited liability to reimburse any losses as stipulated in the agreement.</p>
  </section>
  <section>
    <h2>TAXES</h2>
    <h3>Possible Taxable Event</h3>
    <p>Using our services may trigger a taxable event on your side, which may require you to file a tax declaration and pay any outstanding taxes.</p>
    <h3>Your Responsibility</h3>
    <p>We do not offer any services related to filing tax declarations or paying taxes on your behalf. It is solely your responsibility to declare and pay any outstanding taxes.</p>
  </section>
</template>