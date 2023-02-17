<template>
  <div class="d-flex flex-column align-items-center">
    <router-link class="align-self-start" to="/">
      <h2>
        <b-icon icon="arrow-left"></b-icon>
      </h2>
    </router-link>

    <h3 class="text-center">IQX Brought to you by these sponsors</h3>

    <video v-if="!ended" class="w-100" autoplay="" name="media" @ended="onEnded" @click="ctaClick">
      <source :src="source" type="video/mp4">
    </video>
    
    <transition
      enter-active-class="animate__animated animate__jackInTheBox"
      leave-active-class="animate__animated animate__lightSpeedOutLeft animate__fast">
      <b-badge v-if="ended" class="mt-3" variant="success">You earned {{adCredit}} IQX</b-badge>
    </transition>

    <transition
      enter-active-class="animate__animated animate__bounceIn animate__delay-1s"
      leave-active-class="animate__animated animate__lightSpeedOutRight animate__fast">
      <b-badge v-if="ended" class="mt-3" variant="success">
        <number
          :from="lastBalance"
          :to="lastBalance + adCredit"
          :format="currency"
          :duration="2"
          :delay="2"
          easing="Power1.easeOut" /> 
          IQX
      </b-badge>
    </transition>

    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown">
      <b-button v-if="ended" class="w-75 py-3 mt-5" variant="secondary" @click="playNext">Watch another Ad</b-button>
    </transition>
  </div>
</template>

<script>
import currency from '@/mixins/currency'

export default {
  data() {
    return {
      source: '/videos/crypto-01.mp4',
      ended: false,
      lastBalance: this.$store.getters['wallet/balance'],
      adCredit: 50
    }
  },
  mixins: [currency],
  methods: {
    onEnded() {
      this.ended = true
      this.$store.dispatch('wallet/creditBalance', this.adCredit)
    },
    playNext() {
      Object.assign(this, {
        source: '/videos/crypto-02.mp4',
        ended: false,
        lastBalance: this.$store.getters['wallet/balance']
      })
    },
    ctaClick() {
      window.open('https://coinbase.com/price', `_newtab${Date.now()}`)
    }
  }
}
</script>