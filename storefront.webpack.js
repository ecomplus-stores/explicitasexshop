const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/components/ShippingCalculator.html')
  }
})