<template>
  <nav class="bg-gray-100">
    <div class="container mx-auto px-6 py-5 md:flex md:justify-between md:items-center">

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="md:flex items-center">
        <div class="flex flex-col md:flex-row">
            <router-link class="my-1 text-sm text-gray-700 font-bold hover:text-indigo-500 md:mr-5 md:my-0" to="/">Home</router-link>
            <router-link class="my-1 text-sm text-gray-700 font-bold hover:text-indigo-500 md:mx-5 md:my-0" to="/shop">Shop</router-link>
            <router-link  class="my-1 text-sm text-gray-700 font-bold hover:text-indigo-500 md:mx-5 md:my-0" to="/contact">Contact</router-link>
            <router-link  class="my-1 text-sm text-gray-700 font-bold hover:text-indigo-500 md:mx-5 md:my-0" to="/about">About</router-link>
        </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>