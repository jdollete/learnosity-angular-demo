module.exports = {
  //...
  resolve: {
    fallback: {
      path: require.resolve('os-browserify/browser'),
      "os": require.resolve("os-browserify/browser")
    }
  }
};