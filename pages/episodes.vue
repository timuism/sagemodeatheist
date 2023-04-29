<template>
  <div>
    <article class="w-full max-w-screen-xl mx-auto p-24">
      <Header level="h2">
        All Episodes
      </Header>

      <section class="mt-24">
        <ol class="space-y-32 pb-24 border-b-2 border-secondary-900">
          <li>
            <NuxtLink to="/episode/1" class="group outline-none rounded-lg bg-transparent focus:bg-secondary-900 hover:bg-secondary-900 duration-700 p-12 grid grid-cols-4 gap-8">
              <div class="col-span-1 rounded-md overflow-hidden shadow-flat h-[200px]">
                <img src="/stockphoto1.jpg" alt="" class="object-cover object-top w-full h-full" />
              </div>
              <div class="col-span-3 flex flex-col">
                <Header level="h3">
                  Lift Off! An introduction to the Sage Mode Atheist Podcast
                </Header>

                <Header level="h4" display="h5" class="mt-6">Description</Header>
                <p class="text-xl mt-1">
                  This is the description of the episode. This should not be longer than 3 or 4 sentences. It will also be
                  displayed in podcasts apps.
                </p>

                <div class="mt-auto pt-6">
                  <button class="text-2xl font-display">
                    Listen Now
                  </button>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ol>


      </section>
    </article>

    <JoinMailingList />
  </div>
</template>