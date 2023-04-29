<template>
  <NuxtLink 
    to="/episodes"
    class="flex w-full md:w-auto justify-between items-center space-x-28 border-2 border-primary-500 rounded-lg px-12 py-6 bg-transparent hover:bg-secondary-500 duration-300 outline-none focus:bg-secondary-500"
  >
    <div class="flex flex-col">
      <div class="font-display text-xl lg:text-3xl whitespace-nowrap">Listen now</div>
      <div class="">View our list of episodes</div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="inline-block w-12 h-12">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
  </NuxtLink>
</template>