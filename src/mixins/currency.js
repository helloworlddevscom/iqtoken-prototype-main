export default {
  computed: {
    currency() {
      return (value) => {
        return new Intl.NumberFormat('en-US', {
          maximumSignificantDigits: 10
        }).format(+(value).toFixed(2))
      }
    }
  }
}