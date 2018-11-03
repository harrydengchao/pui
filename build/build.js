var shell = require('shelljs')
var path = require('path')
var packageConfig = require('../package.json')

var ENV = 'prod'


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var src = resolve('src')
var target = resolve('dist')

shell.rm('-rf', target)
shell.mkdir('-p', target)

var buildCommand = `fis3 release ${ENV} -r ${src} -f ${resolve('build/fis-conf.js')} -d ${target}`
shell.exec(buildCommand)

console.log('------------')
console.log(`version: ${packageConfig.version}`)
console.log('------------')
