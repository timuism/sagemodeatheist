<template>
  <div data-theme="greenpink">
    <div class="antialiased font-body bg-secondary-500 text-primary-500 min-w-[320px]">
      <SkipLink to="#content">
        Skip to Content
      </SkipLink>

      <div class="bg-secondary-900">
        <div class="pt-12 pb-12 lg:pb-20 px-4 md:px-6 xl:px-12 flex flex-col space-y-12 lg:space-y-0 md:space-x-6 lg:flex-row justify-between max-w-screen-2xl mx-auto">
          <header class="flex items-center space-x-4">
            <NuxtLink to="/"
              class="bg-transparent hover:bg-secondary-500 p-2 md:p-4 duration-300 rounded-full outline-none focus:bg-secondary-500">
              <PodEmblem /> 
            </NuxtLink>

            <div class="flex flex-col-reverse">
              <Header level="h1">
                <div class="font-semibold">Sage Mode</div>
                <div>Atheist</div>
              </Header>

              <Header level="h2" display="h5" class="mb-4">
                A podcast for Black Atheists
              </Header>
            </div>
          </header>

          <nav>
            <ListenNowButton />

            <div class="mt-4 lg:mt-8 flex justify-start lg:justify-between w-full">
              <NavLink to="https://mailchi.mp/ab5b8e3dbf0d/join-the-sage-mode-atheist-podcast-mailing-list"
                target="_blank" label="Join" desc="Let's build a community" />
              <NavLink to="/donate" label="Donate" desc="Support the podcast" />
            </div>
          </nav>
        </div>
      </div>

      <main id="content">
        <slot />
      </main>

      <div class="mt-12 lg:mt-24 w-full max-w-screen-2xl mx-auto flex items-center justify-center">
        <a href="#" class="bg-transparent hover:bg-secondary-900 p-2 md:p-4 duration-300 rounded-full outline-none focus:bg-secondary-900">
          <PodEmblem />
        </a>
      </div>

      <footer class="bg-secondary-900 mt-12">
        <div class="max-w-screen-2xl mx-auto p-6 lg:px-24 py-12">
          <nav>
            <!-- @todo: add nav links + site map to footer -->
          </nav>

          <section class="flex flex-col space-y-2 lg:flex-row lg:justify-between">
            <p class="font-semibold">&copy; 2023 Sage Mode Atheist Podcast</p>
            <a href="https://twitter.com/timuism"
              class="font-semibold bg-secondary-500 rounded-md group outline-none border-2 border-transparent focus:border-primary-500 px-2 py-1">
              Site made by <span class="font-mono group-hover:underline group-focus:underline">
                @timuism
              </span>
            </a>
          </section>
        </div>
      </footer>
    </div>
  </div>
</template>