<template>
  <div>
    <div class="d-flex justify-content-center">
      <Logo />
    </div>
    <PasswordReset />
  </div>
</template>

<script>
export default {
  components: {
    PasswordReset: () => import('@/components/PasswordReset'),
    Logo: () => import('@/components/Logo')
  }
}
</script>