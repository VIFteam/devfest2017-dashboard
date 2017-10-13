exports.config = {
  bundles: [
    { components: [
      'vif-dashboard',
      'vif-player',
      'vif-score',
      'vif-cards'
    ] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
