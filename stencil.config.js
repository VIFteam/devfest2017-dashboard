exports.config = {
  bundles: [
    { components: [
      'vif-dashboard',
      'vif-player',
      'vif-score',
      'vif-cards'
    ] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
