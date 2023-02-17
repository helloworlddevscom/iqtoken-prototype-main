<template>
    <div class="vue-tempalte">
        <form @submit.prevent="login">
            <h3>Sign In</h3>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <b-button variant="primary" type="submit" class="btn btn-lg btn-block">Sign In</b-button>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/reset-password">Forgot password ?</router-link>
            </p>
        </form>
        <form @submit.prevent="login" class="mb-3">
            <div class="social-icons">
                <MetaMaskButton />
            </div>
        </form>
        <p class="forgot-password text-right">
            Not registered?
            <router-link :to="{name: 'register'}">Sign up Free here!</router-link>
        </p>
    </div>
</template>

<script>
import MetaMaskButton from '@/components/MetaMaskButton'

export default {
  components: {
    MetaMaskButton
  },
  methods: {
    async login() {
      await this.$store.dispatch('user/login')
      this.$router.push('/')
    }
  }
}
</script>