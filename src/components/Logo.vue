<template>
  <div class="logo-container" :class="[size]">
    <img alt="IQToken Logo" :class="[size]" src="../assets/logo-01.png">
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium'
    }
  }
}
</script>
<style lang="scss" scoped>
  .logo-container {
    position: relative;
  }

  .large {
    width: 200px;
  }

  .medium {
    width: 100px;
  }

  .small {
    width: 50px;
  }
</style>