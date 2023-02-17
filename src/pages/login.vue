<template>
  <div>
    <div class="d-flex justify-content-center">
      <Logo />
    </div>
    
    <Login />
  </div>
</template>

<script>
export default {
  components: {
    Login: () => import('@/components/Login'),
    Logo: () => import('@/components/Logo')
  }
}
</script>