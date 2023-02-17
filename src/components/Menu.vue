<template>
  <div class="menu-container">
    <transition
      name="menu-body-transition"
      enter-active-class="animate__animated animate__slideInLeft animate__faster"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster">
      <div v-if="active" class="menu-bg" @click="$emit('close')"></div>
    </transition>
    <transition
      name="menu-body-transition"
      enter-active-class="animate__animated animate__slideInLeft animate__fast"
      leave-active-class="animate__animated animate__slideOutLeft animate__fast">
      <div v-if="active" class="menu-body d-flex flex-column align-items-center pt-5 px-2 ">
        <Logo size="small"  class="animate__animated animate__bounce" />
        <div class="user pt-2 text-center d-flex flex-column position-relative w-100">
          <p class="m-0">John Doe</p>
          <span class="mx-2 secondary"><small>johndoe@gmail.com</small></span>
        </div>
        <div class="menu-nav pt-5 w-100">
          <b-nav vertical class="d-flex">
            <b-nav-item to="/" active>
              <div class="d-inline mr-2">
                <b-icon icon="house-door-fill"></b-icon>
              </div>
              Home
            </b-nav-item>
            <b-nav-item to="/wallet">
              <div class="d-inline mr-2">
                <b-icon icon="wallet2"></b-icon>
              </div>
              Wallet
            </b-nav-item>
            <b-nav-item to="/ifastlane">
              <div class="d-inline mr-2">
                <b-icon icon="stopwatch"></b-icon>
              </div>
              IFastlane
            </b-nav-item>
            <div class="menu-settings d-flex flex-column justify-content-end pb-5">
              <b-nav-item to="/settings">
                <div class="d-inline mr-2">
                  <b-icon icon="gear-fill"></b-icon>
                </div>
                Settings
              </b-nav-item>
            </div>
          </b-nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Logo: () => import('./Logo')
  }
}
</script>
<style lang="scss" scoped>
  .menu-container {
    
    .menu-bg {
      position: fixed;
      top: 56px;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #3b5998;
      opacity: 0.35;
      z-index: 100000;
    }

    .menu-body {
      position: fixed;
      top: 56px;
      left: 0;
      width: 180px;
      height: 100vh;
      background-color: #fff;
      z-index: 100000;
    }

    .menu-nav {
      margin-left: -10px;
    }

    .menu-user {

    }

    .menu-settings {
      height: 55vh;
    }
  }
</style>