<template>
  <div class="d-flex flex-column">
    <div class="mt-3">
      <h3>Price: 0.231 IQX <sup>hr</sup></h3>
    </div>

    <div class="d-flex justify-content-end">
      <div class="pr-4" style="border-bottom: 4px solid #000">Performance</div>
    </div>
    
    <div class="d-flex justify-content-between mt-3 border-top">
      <div class="d-flex flex-column">
        <div class="mb-3 text-center">Current Week</div>
        <vue-ellipse-progress color="#7fe1ad" :size="100" :progress="50" :thickness="10" emptyThickness="10%">
           <template>
            <div style="font-weight: bold; line-height: 10px; font-size: 1.6rem; color: #7fe1ad;">
              50
            </div>
            <div style="font-weight: bold; font-size: 1.6rem; color: #7fe1ad;">
              mb/s
            </div>
          </template>
        </vue-ellipse-progress>
      </div>
      <div class="d-flex flex-column">
        <div class="mb-3 text-center">Last Week</div>
        <vue-ellipse-progress color="#f85f6a" :size="100" :progress="20" :thickness="10" emptyThickness="10%">
          <template>
            <div style="font-weight: bold; line-height: 10px; font-size: 1.6rem; color: #f85f6a;">
              12
            </div>
            <div style="font-weight: bold; font-size: 1.6rem; color: #f85f6a;">
              mb/s
            </div>
          </template>
        </vue-ellipse-progress>
      </div>
      <div class="d-flex flex-column">
        <div class="mb-3 text-center">Last Month</div>
        <vue-ellipse-progress color="#5f6af8" :size="100" :progress="85" :thickness="10" emptyThickness="10%">
          <template>
            <span style="font-weight: bold; font-size: 1.6rem; color: #5f6af8;">
              1 gb/s
            </span>
          </template>
        </vue-ellipse-progress>
      </div>
    </div>

    <b-dropdown text="IFastlane Application" variant="primary" class="mt-5 m-md-2">
      <b-dropdown-item >Call of Duty</b-dropdown-item>
      <b-dropdown-item>Fortnite</b-dropdown-item>
      <b-dropdown-item>Nexflix</b-dropdown-item>
      <b-dropdown-item>Zoom</b-dropdown-item>
    </b-dropdown>

    <b-form-checkbox v-model="connected" size="lg" switch class="mt-5">
      Connect to IFastlane
    </b-form-checkbox>
  </div>
</template>

<script >
import { VueEllipseProgress } from 'vue-ellipse-progress'

export default {
  components: { VueEllipseProgress },
  data() {
    return {
      selected: null,
      connectedInverval: null
    }
  },
  computed: {
    connected: {
      get() {
        return this.$store.getters['ifastlane/connected']
      },
      set(value) {
        this.$store.dispatch('ifastlane/toggleConnected', value)
      }
    }
  }
}
</script>