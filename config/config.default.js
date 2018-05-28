'use strict';

module.exports = appInfo => {
  // const config = exports = {};

  // // use for cookie sign key, should change to your own and keep security
  // config.keys = appInfo.name + '_1527491603102_7696';

  // // add your config here
  // config.middleware = [];

  // return config;

  return {
    keys: appInfo.name + '_1527491603102_7696',
    middleware: [],
    mongodb:'mongodb://127.0.0.1/node_club_test'
  }
};
