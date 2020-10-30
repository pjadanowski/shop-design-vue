<template>
  <nav class="bg-white py-4">
    <div
      class="container mx-auto px-6 py-3 md:flex md:justify-between items-center"
    >
      <div class="flex justify-between items-center">
        <div>
          <router-link
            class="text-gray-800 tracking-wider text-xl font-bold md:text-2xl hover:text-gray-700"
            to="/"
          >
            Brand.
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="md:flex items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
          <div class="relative w-96">
            <input
              type="text"
              placeholder="Search products"
              class="appearance-none border border-gray-600 w-full h-full py-2 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span class="absolute text-gray-500"
                style="right: 12px; top: 12px;"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-center md:block">
          <a
            class="relative flex items-center justify-center px-8 py-3 flex bg-gray-700 text-white text-sm"
            href="#"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="pl-3 text-base font-semibold">Cart</span>
            <span
              class="absolute top-0 right-0 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold h-6 w-6"
              style="margin-top: -6px; margin-right: -6px"
              >1</span
            >
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>