<template>
  <nav class="bg-gray-100">
    <div
      class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center"
    >
      <div class="flex justify-between items-center">
       
    
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div class="md:flex items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
          <router-link
            class="my-1 text-sm text-gray-700 font-bold hover:text-indigo-500 md:mx-4 md:my-0"
            to="/login"
            >Sign in</router-link>
            <span class="text-sm text-gray-700">or</span>
          <router-link
            class="my-1 text-sm text-gray-700 font-bold hover:text-indigo-500 md:mx-4 md:my-0"
            to="/register"
            >Register</router-link>
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