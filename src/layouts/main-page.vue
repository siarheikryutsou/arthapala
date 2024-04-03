<template>
  <div id="main-page">
    <header class="flex items-center justify-between md:justify-end p-8 bg-[#1B6ECF] md:bg-transparent">

      <img class="md:hidden" src="/images/logo_mobile.svg" alt="Arthapala's logo" />

      <nav class="flex gap-6">
        <!--      <a class="color-transition" href="https://x.com/" target="_blank" aria-label="Follow us on Twitter" title="Follow us on Twitter">
                <nuxt-icon filled name="x" />
              </a>-->
        <a class="color-transition" href="https://t.me/Arthapala" target="_blank" aria-label="Follow us on Telegram"
           title="Follow us on Telegram">
          <nuxt-icon filled name="tg" />
        </a>
      </nav>
    </header>

    <main class="px-6 md:flex md:items-center">
      <NuxtPage />
    </main>

    <footer
      class="py-6 px-6 md:px-20 text-white text-xs flex flex-col xl:flex-row xl:justify-between xl:items-end space-y-5 w-full">
      <nav class="mx-auto md:mx-0">
        <ul class="footer-contacts-list">
          <li>
            <a href="mailto:info@arthapala.vc" target="_blank" title="Contact us by email">
              <nuxt-icon filled name="mail" />
              <span>info@arthapala.vc</span>
            </a>
          </li>
          <li>
            <a href="https://maps.app.goo.gl/kdyzd4CcQ4ispkyy8" target="_blank" rel="noopener noreferrer"
               title="Open location in Google Maps">
              <nuxt-icon filled name="geo" />
              <span>Postal address: <strong>Antala Staška 1859/34, Krč, 140 00 Praha</strong></span>
            </a>
          </li>
        </ul>
      </nav>

      <FooterNav />

    </footer>
  </div>
</template>