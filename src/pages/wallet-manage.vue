<template>
  <div class="d-flex flex-column align-items-center">
    <router-link class="align-self-start" to="/wallet">
      <h2>
        <b-icon icon="arrow-left"></b-icon>
      </h2>
    </router-link>

    <div class="w-100 overflow-scroll" style="height: 30vh">
      <b-card no-body header="Current Wallets" class="mt-3 w-100">
        <b-list-group flush>
          <b-list-group-item v-for="(wallet, index) in wallets" :key="index" class="d-flex align-items-center">
            <b-form-radio v-model="selected" class="mr-auto" name="some-radios" :value="index">{{wallet.address.slice(0, 16)}}...</b-form-radio>
            <b-badge class="mr-2" variant="light">{{ currency(wallet.balance) }} IQX</b-badge>
            <b-icon v-if="index != selected" @click="removeWallet(index)" icon="trash" />
            <b-icon v-else icon="check" />
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <b-card no-body header="Load EC20 Wallet" class="mt-3 w-100">
      <b-form @submit.prevent="addWallet" class="d-flex flex-column p-3">
        <b-input v-model="walletAddress" class="mt-3" placeholder="wallet address" required />
        <b-button type="submit" class="mt-3">Load Wallet</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import currency from '@/mixins/currency'
export default {
  data() {
    return {
      walletAddress: ''
    }
  },
  mixins: [currency],
  computed: {
    ...mapGetters({
      wallets: 'wallet/wallets'
    }),
    selected: {
      get() {
        return this.$store.state.wallet.currentWallet
      },
      set(index) {
        this.$store.dispatch('wallet/setWallet', index)
      }
    }
  },
  methods: {
    addWallet() {
      this.$store.dispatch('wallet/addWallet', {
        address: this.walletAddress,
        balance: +(Math.random() * 10000).toFixed(2)
      })
      this.walletAddress = ''
    },
    removeWallet(index) {
      this.$store.dispatch('wallet/removeWallet', index)
    }
  }
}
</script>