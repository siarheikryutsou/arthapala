<script setup lang="ts">
const pageTitle = useState("pageTitle");
pageTitle.value = "Our Team";

const members = [
  {
    img: "mousko.png",
    name: "Dimitri Mousko",
    role: "CEO, Founder",
    ln: "https://www.linkedin.com/in/mousko/"
  },
  {
    img: "vishnyakov.png",
    name: "Peter Vishnyakov",
    role: "CTO, Vice-President",
    ln: "https://www.linkedin.com/in/petervishnyakov/"
  },
  {
    img: "",
    name: "Anna Melo",
    role: "Head of Legal",
  }
];

useHead({
  title: "Arthapāla — " + pageTitle.value,
});
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-y-16 !list-none !p-0">
    <li v-for="(member, index) in members" :key="index">
      <component
        :is="member.ln ? 'a' : 'div'"
        v-bind="member.ln ? { href: member.ln, target: '_blank', rel: 'noopener noreferrer' } : {}"
        class="block group"
      >
        <figure>
          <img v-if="member.img" class="w-48 h-48 rounded-full mx-auto" :src="'/images/team/' + member.img" :alt="member.name" />
          <div v-else class="flex justify-center">
            <nuxt-icon class="w-48 h-48" name="anonim-member" filled/>
          </div>
          <figcaption class="mt-6 text-center [&_p]:!m-0">
            <h3>
              <span class="relative">
                <nuxt-icon v-if="member.ln" class="absolute -right-6 -top-2" name="ln" filled />
                {{ member.name }}
              </span>
            </h3>
            <p>{{ member.role }}</p>
          </figcaption>
        </figure>
      </component>
    </li>
  </ul>
</template>
