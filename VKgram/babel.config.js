module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            main: './src/main',
            screens: './src/screens',
            widgets: './src/widgets',
            features: './src/features',
            entities: './src/entities',
            shared: './src/shared',
          },
        },
      ],
    ],
  };
};
