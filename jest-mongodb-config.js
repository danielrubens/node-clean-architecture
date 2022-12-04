module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
    //   version: '4.0.3',
      version: '4.12.1',
      skipMD5: true
    },
    autoStart: true
  }
}
