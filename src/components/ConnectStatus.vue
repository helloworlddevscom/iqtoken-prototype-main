<template>
  <router-link to="/ifastlane">
    <b-alert variant="dark" class="d-flex justify-content-between" show>
      <div>
        <b-icon icon="check-circle-fill" variant="success" /> IFastlane
      </div>
      <div>
        {{ $store.getters['ifastlane/duration'] }}
      </div>
      <div>
        {{ currency($store.getters['wallet/balance']) }}
      </div>
    </b-alert>
  </router-link>
</template>

<script>
import currency from '@/mixins/currency'

export default {
  mixins: [currency]
}
</script>