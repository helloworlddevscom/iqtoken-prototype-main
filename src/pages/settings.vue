<template>
  <div class="d-flex flex-column">
    <b-form-checkbox v-model="background" size="lg" switch class="mt-5">
      Run In Background
    </b-form-checkbox>

    <b-dropdown text="TWAMP Peers" variant="primary" class="mt-5 m-md-2">
      <b-dropdown-item >2</b-dropdown-item>
      <b-dropdown-item>3</b-dropdown-item>
      <b-dropdown-item>4</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: false
    }
  }
}
</script>