<script setup lang="ts">
const episodes = [
  {
    uuid: 1,
    episodeNum: '01',
    title: 'Lift Off! An introduction to the Sage Mode Atheist Podcast',
    image: {
      src: '',
      alt: ''
    }
  },
  {
    uuid: 2,
    episodeNum: '2',
    title: 'Lets talk definitions. Atheist? Agnostic? Skeptic?',
    image: {
      src: '',
      alt: ''
    }
  },
  {
    uuid: 3,
    episodeNum: '03',
    title: 'Leaving the faith with Dorlene Ricks',
    image: {
      src: '',
      alt: ''
    }
  }
]
</script>
<template>
  <section class="p-24 max-w-screen-2xl mx-auto">
    <header class="flex justify-between items-end border-b-4 border-secondary-900/25 pb-4">
      <Header level="h2" class="font-display text-3xl ml-24">Recent episodes</Header>

      <!-- @todo: make this the default "Link", update donate and mailing lists links to use this component -->
      <NuxtLink to="/episodes"
        class="font-medium text-lg uppercase tracking-widest border-b-2 border-transparent outline-none hover:border-primary-500 focus:border-primary-500 duration-300 py-4 -mb-4">
        View all episodes
      </NuxtLink>
    </header>

    <ol class="mt-24 flex justify-center space-y-12 md:space-y-0 md:space-x-32 flex-col md:flex-row">
      <EpisodeCard v-for="(episode) in episodes" v-bind="episode" key="episode.uuid" />
    </ol>
  </section>

  <section class="p-24 max-w-screen-2xl mx-auto">
    <header class="flex justify-between items-end border-b-4 border-secondary-900/25 pb-4">
      <Header level="h2" class="ml-24">About</Header>
    </header>
    <div class="mt-24 grid grid-cols-8 gap-8 w-full max-w-screen-xl mx-auto">
      <div
        class="col-span-8 flex items-stretch justify-center bg-secondary-500 border-2 border-primary-500 rounded-lg px-12 py-24 shadow-flat">
        <p class="font-display text-2xl lg:text-4xl">
          Sage Mode Atheist is a podcast for Black atheists/non-believers/skeptics. We want to connect non-believers
          together and continue the vision of a future community of Black atheists.
        </p>
      </div>

      <div
        class="col-span-8 lg:col-span-3 bg-secondary-500 border-2 border-primary-500 rounded-lg overflow-hidden shadow-flat">
        <img src="/DorleneAndTim.jpg" alt="Photo of Dorlene Ricks (left) and Tim Long (right)"
          class="object-cover w-full h-full" />
      </div>

      <div
        class="col-span-8 md:col-span-5 flex items-center justify-center bg-secondary-500 border-2 border-primary-500 rounded-lg px-12 py-24 shadow-flat">
        <p class="font-display text-2xl lg:text-4xl">
          The <strong>podcast</strong> is hosted by <strong>Timothy Long</strong>. He produces it along with his partner, <strong>Dorlene Ricks</strong>.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-24 px-24">
    <JoinMailingList />
  </section>

  <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-8 md:gap-28 pt-32 max-w-screen-2xl mx-auto mt-24">
    <section class="row-span-3 col-span-1">
      <Header level="h2">Contact</Header>
      <form name="contact" method="POST" class="mr-12" netlify>
        <!-- @todo: create form components [label, textinput, textarea, button] -->

        <label for="fullName" class="flex flex-col space-y-2 w-full mt-8">
          <div class="text-sm uppercase tracking-widest font-bold">Full Name</div>
          <input type="text"
            class="bg-transparent font-mono text-xl border-b-2 border-primary-500 w-full py-1 px-1 outline-none focus:bg-secondary-900 "
            name="fullName" placeholder="James Baldwin" />
        </label>

        <label for="emailAddress" class="flex flex-col space-y-2 w-full mt-8">
          <div class="text-sm uppercase tracking-widest font-bold">Email Address</div>
          <input type="text"
            class="bg-transparent font-mono text-xl border-b-2 border-primary-500 w-full py-1 px-1 outline-none focus:bg-secondary-900"
            name="emailAddress" placeholder="james@example.com" />
        </label>

        <label for="message" class="flex flex-col space-y-2 w-full mt-8">
          <div class="text-sm uppercase tracking-widest font-bold">Message</div>
          <textarea
            class="bg-transparent font-mono text-xl rounded-lg border-2 border-dashed border-primary-500 w-full p-4 outline-none focus:bg-secondary-900"
            name="message" placeholder="Write your message here…" />
        </label>

        <button type="submit"
          class="mt-8 font-display flex justify-between border-2 border-primary-500 rounded-lg px-6 py-4 w-full hover:bg-secondary-900 outline-none focus:bg-secondary-900 duration-300">
          <div class="text-lg md:text-2xl">Send Message</div>
        </button>
      </form>
    </section>

    <section class="row-span-1 col-span-1 md:col-span-2 pt-24 md:pt-0">
      <Header level="h2">Shop</Header>
      <article class="mt-4 text-lg space-y-4">
        <p>Merchandise to help support and promote the podcast will be coming soon. If you want to be notified about when merch is available, please subscribe to our email list.</p>

        <!-- @todo: set up mailing list -->
        <form action="https://mailchi.mp/ab5b8e3dbf0d/join-the-sage-mode-atheist-podcast-mailing-list">
          <button type="submit"
            class="mt-4 font-display inline-flex justify-between border-b-2 border-primary-500 outline-none hover:border-primary-900 focus:border-primary-900 duration-300">
            <div class="text-lg md:text-2xl">Join our Mailing List</div>
          </button>
        </form>
      </article>
    </section>

    <section class="row-span-1 col-span-1 md:col-span-2 mt-12">
      <Header level="h2">Donate</Header>
      <article class="mt-4 text-lg space-y-4">
        <p>Another way to support the podcast is financially. We would greatly appreciate any donation as recording
          and maintaining a podcast. Takes alot of time and money.</p>

          <!-- @todo: setup donations -->
        <form action="">
          <button type="submit"
            class="mt-4 font-display inline-flex justify-between border-b-2 border-primary-500 hover:border-primary-900 focus:border-primary-900 outline-none duration-300">
            <div class="text-lg md:text-2xl">Give donation</div>
          </button>
        </form>
      </article>
    </section>

    <section class="row-span-1 col-span-1 md:col-span-2" hidden>
      <Header level="h2">Our network</Header>
    </section>
  </div>
</template>

<style scoped>
ol {
  counter-reset: count;
}

li {
  counter-increment: count;
}

li::before {
  content: counter(count, decimal-leading-zero)
}
</style>