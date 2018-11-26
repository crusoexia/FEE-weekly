module.exports = function(api) {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];

  if (api) {
    api.cache(true);
  }

  return {
    presets
  };
};
