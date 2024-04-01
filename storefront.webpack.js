const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
        './js/ShippingCalculator.js': path.resolve(__dirname, 'template/js/custom-js/js/ShippingCalculator.js'),
        './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html')
    }
  }
})