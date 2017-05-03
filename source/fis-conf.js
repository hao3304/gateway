fis.hook('npm')
fis.hook('commonjs', {
    extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
})

fis.match('/{node_modules,client,pages,components}/**.js', {
    isMod: true,
    useSameNameRequire: true
});


fis.match('/{pages,components}/**.vue',{
    isMod: true,
    rExt: 'js',
    useSameNameRequire: true,
    parser: [
        fis.plugin('vue-component',{
            runtimeOnly:true,
            extractCSS:false
        })
    ]
})


fis.match('/pages/(**.html)',{
    release:'../view/$1'
}).match('/{pages,components}/(**.{js,vue})',{
    release:'../www/static/js/$0',
    url:'/static/js/$0'
}).match('/static/(**)',{
    release:'../www/static/$1',
    url:'/static/$1'
}).match('/node_modules/**',{
    release:'../www/static/$0',
    url:'/static/$0'
})

fis.match('*.{js,jsx,ts,tsx,es}', {
    preprocessor: [
      fis.plugin('js-require-css'),
      fis.plugin('js-require-file', {
        useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
      })
    ]
})



fis.match('/{pages,components}/**.{js,vue:js}', {
    rExt: 'js',
    isMod: true,
    useSameNameRequire: true,
    parser: fis.plugin('babel-5.x')
});

fis.match('{pages,static,components}/**.{less,vue:less}', {
    parser: [fis.plugin('less-2.x')],
    rExt: '.css',
    postprocessor: fis.plugin('autoprefixer')
});

fis.match('::package', {
    postpackager: fis.plugin('loader',{
        resourceType: 'commonJs',
        useInlineMap: true
    }),
    packager: fis.plugin('map')
});

fis.media('prod').match('/{static,node_modules}/**.js',{
    packTo:'/static/pkg/common.js'
})

fis.unhook('components')
