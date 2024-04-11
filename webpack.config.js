const path = require('path');

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出配置
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出文件的目标路径
        filename: 'bundle.js' // 输出文件的名称
    },
    // 配置模块如何被解析
    module: {
        rules: [
            // 加载器配置（例如，用于处理 CSS、JSX、图片等）
        ]
    },
    // 插件配置
    plugins: [
        // 插件列表
    ]
};

//