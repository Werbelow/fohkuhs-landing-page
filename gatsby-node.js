exports.modifyWebpackConfig = function(config, env) {

    // config.loader('svg', {
    //    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //    loader: 'file-loader',
    // })

    config.loader('images', {
      test: /\.(svg|jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: 'file-loader'
    });

    return config
};