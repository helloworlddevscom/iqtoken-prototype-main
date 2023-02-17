<template>
    <b-button type="submit" class="p-2 btn-block d-flex align-items-center justify-content-center">
      <inline-svg :src="require('../assets/metamask.svg')" width="40" height="40" class="mr-3" />
      <slot>Login With MetaMask</slot>
    </b-button>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg,
  }
}
</script>

<style lang="scss" scoped>

</style>