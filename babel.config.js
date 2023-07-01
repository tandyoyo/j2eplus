module.exports = {
    presets: [['@vue/cli-plugin-babel/preset', { exclude: ['proposal-dynamic-import'] }]],
    env: {
        development: {
            plugins: ['dynamic-import-node']
        }
    },
    plugins: [
        [
            'import',
            {
                libraryName: 'ant-design-vue',
                libraryDirectory: 'es',
                style: true // `style: true` 会加载 less 文件
            }
        ]
    ]
};
