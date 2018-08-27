/* config-overrides.js */
const rewireSass = require('react-app-rewire-scss');
const { injectBabelPlugin, paths } = require('react-app-rewired');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");
const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');

module.exports = function override(config, env) {

    config = rewireVendorSplitting(config, env);    
    config = rewireSass(config, env);   // add sass...
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }], config);    // 配置antd-mobile
    config = injectBabelPlugin(['import', { libraryName: 'syntax-dynamic-import' }], config);                               // 再配置动态加载

    // 配置路由
    config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/shared/components/`),
        '@modules': path.resolve(__dirname, `${paths.appSrc}/modules/`),
        '@config': path.resolve(__dirname, `${paths.appSrc}/config/`),
        '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`)
	})(config, env);

    config['externals'] = {                         // 这些固定文件使用cdn直接下载，目前使用的是ali-dev
        '@antv/f2': 'F2',
        // 'react': 'React',
        // 'react-dom': 'ReactDOM'
    };

    if (env === 'production') {
        config['devtool'] = false;                  // 生产环境: 不生成source-map文件。
        config['output']['publicPath'] = '';        // 由于项目工程是按固定路径部署，所以这里使用相对路径，而不使用绝对路径。
        config = rewireWebpackBundleAnalyzer(config, env, {     // 使用生成js文件分析工具
            analyzerMode: 'static',
            reportFilename: 'report.html'
        })
    }

    console.log('env: ' + env);
    console.log(config);

    return config;
}