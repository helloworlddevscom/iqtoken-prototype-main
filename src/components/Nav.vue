<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-toggle @click="$emit('toggle-menu')" target="#bank-target" ></b-navbar-toggle>
      <span id="bank-target"></span>
      
      <b-navbar-brand href="#">
        <b-icon class="mr-2" :icon="icoMap[$route.name] || icoMap.home"></b-icon>
        {{ $route.name | ucfirst }}
      </b-navbar-brand>
      
    </b-navbar>
  </div>
</template>

<script>
export default {
  filters: {
    ucfirst(s) {
      return s && `${s[0].toUpperCase()}${s.slice(1)}` || ''
    }
  },
  data() {
    return {
      icoMap: {
        home: 'house-door-fill',
        wallet: 'wallet2',
        ifastlane: 'stopwatch',
        settings: 'gear-fill'
      }
    }
  }
}
</script>