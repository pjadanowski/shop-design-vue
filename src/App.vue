<template>

    <LoginRegisterNav />
    <TopNavbar />
    <Menu />

    <router-view></router-view>

</template>

<script>
import LoginRegisterNav from './components/LoginRegisterNav.vue';
import TopNavbar from './components/TopNavbar.vue';
import Menu from './components/Menu.vue';

export default {
  name: "App",
  components: {
    LoginRegisterNav,
    TopNavbar,
    Menu,
  },
};
</script>
