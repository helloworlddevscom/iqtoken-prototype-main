<template>
  <div>
    <div class="d-flex justify-content-center">
      <Logo />
    </div>

    <Register />
  </div>
</template>

<script>
export default {
  components: {
    Register: () => import('@/components/Register'),
    Logo: () => import('@/components/Logo')
  }
}
</script>