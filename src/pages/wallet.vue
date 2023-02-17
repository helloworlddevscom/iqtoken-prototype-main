<template>
  <div class="d-flex flex-column">
    <b-navbar toggleable="sm" type="light" variant="light">
      
      <b-navbar-brand>Wallet</b-navbar-brand>
      
      <b-nav-text><small>{{ $store.getters['wallet/address'].slice(0, 16) }}...</small></b-nav-text>

      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="secondary" to="/wallet/manage" style="width: 77px">Manage</b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar toggleable="sm" type="light" variant="light">
      <b-navbar-brand>Balance:</b-navbar-brand>
      <b-nav-text>
        <small>{{ currency($store.getters['wallet/balance']) }} IQX</small>
      </b-nav-text>
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="secondary" to="/purchase" style="width: 77px">Purchase</b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-card no-body header="Transaction History" class="mt-5">
      <b-list-group flush>
        <b-list-group-item href="#">+ 2.50 IQX</b-list-group-item>
        <b-list-group-item href="#">+ 5.50 IQX</b-list-group-item>
        <b-list-group-item href="#">- 30.70 IQX [IFastlane]</b-list-group-item>
        <b-list-group-item href="#">+ 50.00 IQX [Online Purchase]</b-list-group-item>
        <b-list-group-item href="#">+ 2.50 IQX</b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import currency from '@/mixins/currency'

export default {
  mixins: [currency]
}
</script>