// default settings. fis3 release

// 引入模块化开发插件，设置规范为 commonJs 规范。
fis.hook('commonjs', {
    baseUrl: '.',
    extList: ['.js', '.es']
});

// 启用插件
fis.hook('relative');

// Global start
fis.match('*.js', {
  preprocessor: [
      fis.plugin('js-require-file'),
      fis.plugin('js-require-css', {
          mode: 'dependency'
      })
  ]
});

/* 配置components */
fis.match('/components/*', {
    isMod: true
});

fis.match('**.scss',{
    isCssLike: true,
    rExt: '.css', // from .scss to .css
    preprocessor : fis.plugin("autoprefixer",{
      "browsers": ["IE >= 6", "Android >= 4", "iOS >= 8", "last 3 versions"],
      "cascade": true
    }),
    //其他预处理
    parser: fis.plugin('node-sass', {
        outputStyle: 'expanded'
    })
});

// fis.match('*css', {
//   postprocessor: fis.plugin('px2rem', {
//     baseDpr: 2,             // base device pixel ratio (default: 2)
//     remUnit: 37.5,            // rem unit value (default: 75)
//     remPrecision: 6         // rem precision (default: 6)
//   })
// });

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  // spriter: fis.plugin('csssprites')
})

/* 图片处理 */
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

/* 合并输出，以页面为单位 */
// fis.match('::package', {
//   postpackager: fis.plugin('loader', {
//     allInOne: true
//   })
// });
/* 合并输出 */
// fis.match('*.{scss,css}', {
//   packTo: '/static/main.css'
// });
// /* 合并输出 */
// fis.match('*.js', {
//   packTo: '/static/main.js'
// });

/* static 下的内容，原封不动输出到static下 */
fis.match('/static/**/*', {
    release: '$0'
});

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
});
// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  })
  .match('*.{js,css,png}', {
    useSprite: false
  });

// extends GLOBAL config
fis.media('prod')
  // .match('*', {
  //   useHash: true
  // })
  .match('*.{scss,css}', {
    // optimizer: fis.plugin('clean-css')
  })
  .match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    // optimizer: fis.plugin('uglify-js')
  })
  .match('*.html', {
    useHash: false
  })
  // .match('*.html', {
  //   deploy: [
  //       fis.plugin('replace', {
  //           from: /(href=")(.+)(")/gi,
  //           to: function ($0, $1, $2, $3) {
  //             return ('href=<@url value="'+ $2 + '"');
  //           }
  //       }),
  //       fis.plugin('replace', {
  //           from: /(src=")(.+)(")/gi,
  //           to: function ($0, $1, $2, $3) {
  //             return ('src=<@url value="'+ $2 + '"');
  //           }
  //       }),
  //       fis.plugin('local-deliver')
  //   ]
  // });