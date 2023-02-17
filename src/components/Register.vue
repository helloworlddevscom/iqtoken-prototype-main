<template>
    <div class="vue-tempalte">
        <form @submit.prevent="register" class="mb-4">
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Verify Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <b-button variant="primary" type="submit" class="btn btn-lg btn-block">Sign Up</b-button>

        </form>
        
        <form @submit.prevent="register" class="mb-3">
            <div class="social-icons">
                <MetaMaskButton>
                  Connect With MetaMask
                </MetaMaskButton>
            </div>
        </form>

        <p class="forgot-password text-right">
            Already registered 
            <router-link :to="{name: 'login'}">sign in?</router-link>
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
    async register() {
      await this.$store.dispatch('user/login')
      this.$router.push('/')
    }
  }
}
</script>