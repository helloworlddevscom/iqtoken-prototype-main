<template>
  <div class="d-flex flex-column align-items-center justify-content-between mt-5" style="height: 70vh">
      <div class="d-flex mx-5">
        <h1 class="wallet-balance">{{ currency($store.getters['wallet/balance']) }}</h1><sup>IQX</sup>
      </div>
      
      <div class="w-100 px-3">
        <b-button class="w-100 mb-5 py-3 btn-block" variant="dark" to="/ad-viewer">Watch Ad / Earn IQX</b-button>
        <b-button class="w-100 mb-5 py-3" variant="primary" to="/ifastLane">IFastlane</b-button>
        <b-button class="w-100 py-3" variant="secondary" to="/wallet">Wallet</b-button>
      </div>
  </div>
</template>

<script>
import currency from '@/mixins/currency'

export default {
  mixins: [currency]
}
</script>


<style lang="scss" scoped>
  .wallet-balance {
    font-size: 4.5rem;
  }
</style>