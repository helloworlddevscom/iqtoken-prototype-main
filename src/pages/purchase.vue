<template>
  <div class="d-flex flex-column align-items-center">
    <router-link class="align-self-start" to="/wallet">
      <h2>
        <b-icon icon="arrow-left"></b-icon>
      </h2>
    </router-link>

    <div class="w-100 overflow-scroll" style="height: 30vh">
      <b-card no-body header="Select A Purchase" class="mt-3 w-100">
        <b-list-group flush>
          <b-list-group-item v-for="(plan, index) in plans" :key="index" class="d-flex align-items-center">
            <b-form-radio v-model="selected" class="mr-auto" name="some-radios" :value="index">
              {{currency(plan.price)}} {{ plan.currency }} - {{ currency(plan.amount) }} IQX
            </b-form-radio>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    
    <b-button class="w-75 py-3 mx-auto my-5" variant="secondary" @click="purchase">
      Purchase IQX
    </b-button>
  </div>
</template>

<script>
import currency from '@/mixins/currency'

export default {
  data() {
    return {
      selected: 0,
      plans: [{
        label: '5000 IQX',
        amount: 5000,
        price: 0.100,
        currency: 'ETH'
      }, {
        label: '10000 IQX',
        amount: 10000,
        price: 0.200,
        currency: 'ETH'
      }]
    }
  },
  mixins: [currency],
  computed: {
    plan() {
      return this.plans[this.selected]
    }
  },
  methods: {
    purchase() {
      this.$store.dispatch('wallet/creditBalance', this.plan.amount)
      this.$router.push('/wallet')
    },
  }
}
</script>