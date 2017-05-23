require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

//头部下方导航
var navList = require('../src/mock/navlist.json')
//推荐页banner
var bannerNav = require('../src/mock/bannerNav.json')
//推荐页内容
var evePerson = require('../src/mock/eveperson.json')
//居家页内容
var juHomeTitle = require('../src/mock/juhometitle.json')
var juHomeCont = require('../src/mock/juhomecont.json')
//这是美妆页面
var juHomeTitle = require('../src/mock/juhometitle.json')
var juHomeCont = require('../src/mock/juhomecont.json')
//分类页---分类页
var typeBrand = require('../src/mock/typebrand.json')
//分类页---品牌页
var typeType = require('../src/mock/typetype.json')
//购物车
var buyThing = require('../src/mock/buything.json')
// 引入数据库
var apiRoutes = express.Router()
// 使用api的方法来创建连接时候的请求
apiRoutes.get('/navList', function (req, res) {
  res.json(navList);
})
apiRoutes.get('/bannerNav', function (req, res) {
  res.json(bannerNav);
})
apiRoutes.get('/evePerson', function (req, res) {
  res.json(evePerson);
})
apiRoutes.get('/juHomeTitle', function (req, res) {
  res.json(juHomeTitle);
})
apiRoutes.get('/juHomeCont', function (req, res) {
  res.json(juHomeCont);
})
apiRoutes.get('/typeBrand', function (req, res) {
  res.json(typeBrand);
})
apiRoutes.get('/typeType', function (req, res) {
  res.json(typeType);
})
apiRoutes.get('/buyThing', function (req, res) {
  res.json(buyThing);
})
// 调用api
app.use('/api', apiRoutes)