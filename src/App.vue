<template>
  <div id="app">
    <transition
      enter-active-class="animate__animated animate__slideInDown animate__fast"
      leave-active-class="animate__animated animate__slideOutUp animate__fast">
      <AppNav v-if="$store.getters['user/loggedIn']" @toggle-menu="menu = !menu" />
    </transition>
    <div class="app-container">
      <router-view/>
    </div>
    <div class="position-fixed w-100 overflow-hidden" style="height: 6vh; bottom: 0;">
      <transition
        enter-active-class="animate__animated animate__slideInUp animate__fast"
        leave-active-class="animate__animated animate__slideOutDown animate__fast">
        <ConnectStatus v-if="$store.getters['ifastlane/connected']" />
      </transition>
    </div>
    <Menu :active="menu" @close="menu = false" />
  </div>
</template>

<script>
export default {
  components: {
    AppNav: () => import('./components/Nav.vue'),
    Menu: () => import('./components/Menu.vue'),
    ConnectStatus: () => import('./components/ConnectStatus.vue')
  },
  watch: {
    '$route.name': function() {
      this.menu = false
    }
  },
  data() {
    return {
      menu: false
    }
  }
}
</script>

<style scoped>
.app-container {
  padding-left: 10px;
  padding-right: 10px;
}
</style>


