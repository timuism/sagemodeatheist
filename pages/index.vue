<template>
  <section class="px-8 pt-24 pb-12 md:p-24 max-w-screen-2xl mx-auto">
    <header class="flex justify-between items-end border-b-4 border-secondary-900/25 pb-4">
      <Header level="h2" class="font-display text-3xl md:ml-24">Recent episodes</Header>
      <ActionLink to="/episodes" class="hidden lg:inline-block">View All Episodes</ActionLink>
    </header>

    <ol class="mt-24 flex justify-start space-y-12 md:space-y-0 md:space-x-32 flex-col md:flex-row">
      <Suspense>
        <RecentEpisodes />
        
        <template #fallback>
          Loading!
        </template>
      </Suspense>
    </ol>

    <div class="w-full mt-24 text-center lg:hidden" aria-hidden="true">
      <ActionLink to="/episodes">View All Episodes</ActionLink>
    </div>
  </section>

  <section class="px-8 pt-24 pb-12 md:p-24 max-w-screen-2xl mx-auto">
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
        class="col-span-8 lg:col-span-5 flex items-center justify-center bg-secondary-500 border-2 border-primary-500 rounded-lg px-12 py-24 shadow-flat">
        <p class="font-display text-2xl lg:text-4xl">
          The <strong>podcast</strong> is hosted by <strong>Timothy Long</strong>. He produces it along with his partner,
          <strong>Dorlene Ricks</strong>.
        </p>
      </div>
    </div>
  </section>

  <section class="mt-12 md:mt-24 p-6 md:px-24">
    <JoinMailingList />
  </section>

  <div
    class="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 gap-8 md:gap-20 pt-12 md:pt-32 px-6 md:px-24 max-w-screen-2xl mx-auto mt-24">
    <section class="row-span-3 col-span-1">
      <Header level="h2">Contact</Header>
      <form name="contact" method="POST" class="mr-12" netlify>
        <label for="firstName" class="flex flex-col space-y-2 w-full mt-8">
          <div class="text-sm uppercase tracking-widest font-bold">First Name</div>
          <input type="text"
            class="bg-transparent font-mono text-xl border-b-2 border-primary-500 w-full py-1 px-1 outline-none focus:bg-secondary-900 "
            name="firstName" placeholder="Tim" />
        </label>

        <label for="emailAddress" class="flex flex-col space-y-2 w-full mt-8">
          <div class="text-sm uppercase tracking-widest font-bold">Email Address</div>
          <input type="text"
            class="bg-transparent font-mono text-xl border-b-2 border-primary-500 w-full py-1 px-1 outline-none focus:bg-secondary-900"
            name="emailAddress" placeholder="tim@example.com" />
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

    <section class="row-span-1 col-span-1 lg:col-span-2 pt-24 md:pt-0">
      <Header level="h2">Shop</Header>
      <article class="mt-4 text-lg space-y-4">
        <p>Merchandise to help support and promote the podcast will be coming soon. If you want to be notified about when
          merch is available, please subscribe to our email list.</p>
        <ActionLink to="https://mailchi.mp/ab5b8e3dbf0d/join-the-sage-mode-atheist-podcast-mailing-list" class="mt-4">Join
          our Mailing List</ActionLink>
      </article>
    </section>

    <section class="row-span-1 col-span-1 lg:col-span-2 mt-12">
      <Header level="h2">Donate</Header>
      <article class="mt-4 text-lg space-y-4">
        <p>Another way to support the podcast is financially. We would greatly appreciate any donation as recording
          and maintaining a podcast. Takes alot of time and money.</p>

        <!-- @todo: setup donations -->
        <ActionLink to="" class="mt-4">Give Donation</ActionLink>

      </article>
    </section>

    <section class="row-span-1 col-span-1 lg:col-span-2" hidden>
      <Header level="h2">Our network</Header>
    </section>
  </div>
</template>