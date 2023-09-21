module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'NEWS_APIKEY',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
