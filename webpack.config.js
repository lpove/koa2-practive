// webpack.config.js
// 'use strict';
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env = {}) => {
    console.log('env:', env);
    const config = {
        entry: ['./src/main.js'],
        mode: env.development ? 'development' : 'production',
        target: 'node',
        devtool: env.development ? 'cheap-eval-source-map' : false,
        resolve: {
            // tell webpack waht file watch
            extensions: ['.ts', '.js'],
            modules: ['node_modules','src','package.json']
        }, // tells webpack waht files to watch
        plugins: [], // require for config.plugin.push(...)
        module:{
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                }
            ]
        }
        // output:{
        //     filename: 'test.js'
        // }
        // https://webpack.js.org/configuration/output/#outputfilename
    };

    if(env.nodemon){
        config.watch = true;
        config.plugins.push(new NodemonPlugin());
    }

    return config;
};

/**
 * 

如你所见，从 Webpack 开始并不需要太多配置。唯一需要的两个选项是 entry 和 target。我们用 entry 字段声明程序的入口点，告诉 Webpack 在 Node.js 中使用 target 字段。

可以用 mode 字段告诉 Webpack 它应该关注编译速度（开发）还是混淆和缩小（生产）。为了帮助调试，需要在开发模式中运行，用 devtool 字段来指示我们想要源映射。这样，如果出现错误，可以很容易地在代码中找到它出现的位置。

作者：疯狂的技术宅
链接：https://segmentfault.com/a/1190000019028660
来源：SegmentFault 思否
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

 */