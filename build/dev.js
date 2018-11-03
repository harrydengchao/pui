var path = require('path')
var shell = require('shelljs')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

shell.rm('-rf', resolve('dist'))
shell.mkdir(resolve('dist'))

var port = 8080
// var serverCommand = `fis3 server start -p ${port} --root ${resolve('dist')}`
// /* 启动server */
// shell.exec(serverCommand)

var buildCommand = `fis3 release -wL -r ${resolve('src')} -f ${resolve('build/fis-conf.js')} -d ${resolve('dist')}`
shell.exec(buildCommand)

