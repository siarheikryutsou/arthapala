<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "Our Team";

const members = [
  {
    img: "mousko.png",
    name: "Dimitri Mousko",
    role: "CEO, Founder",
    ln: "https://www.linkedin.com/in/mousko/",
  },
  {
    img: "vishnyakov.png",
    name: "Peter Vishnyakov",
    role: "CTO, Vice President",
    ln: "https://www.linkedin.com/in/petervishnyakov/",
  },
  {
    img: "obidin.jpg",
    name: "Andrei Obidin",
    role: "Head of Legal",
    ln: "https://www.linkedin.com/in/andrei-obidin-22153086/",
  },
];

useHead({
  title: "Arthapāla — " + pageTitle.value,
});
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-y-16 !list-none !p-0">
    <li v-for="(member, index) in members" :key="index">
      <figure>
        <img
          v-if="member.img"
          class="w-48 h-48 rounded-full mx-auto"
          :src="'/images/team/' + member.img"
          :alt="member.name"
        />
        <div v-else class="flex justify-center">
          <nuxt-icon class="w-48 h-48" name="anonim-member" filled />
        </div>
        <figcaption class="mt-6 text-center [&_p]:!m-0">
            <h3 class="relative inline">
              <NuxtLink v-if="member.ln" :to="member.ln" target="_blank" class="absolute -right-9 -top-4 p-3" title="Link to linkedIn profile" aria-label="Link to linkedIn profile">
                <nuxt-icon name="ln" filled />
              </NuxtLink>
              {{ member.name }}
            </h3>
          <p>{{ member.role }}</p>
        </figcaption>
      </figure>
    </li>
  </ul>
</template>
