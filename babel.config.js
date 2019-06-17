const config = api => {
  const prodMode = api.env('production');
  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage'
        }
      ]
    ]
  };
  return config;
};

module.exports = config;
