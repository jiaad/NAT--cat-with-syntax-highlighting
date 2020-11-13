const { throws } = require('assert');
const fs = require('fs');
const util = require('util')
const fsAccess = util.promisify(fs.access)
const readFile = util.promisify(fs.readFile);
const openFile = util.promisify(fs.open)
const fstat = util.promisify(fs.fstat)
const Stats = util.promisify(fs.stat)
const {performance} = require('perf_hooks');
const os = require('os');


function sysInfo(){
  console.log('ARCH -> ', os.arch())
  console.log('CPUS -> ', os.cpus().length ,'CPUS', 'model', os.cpus()[0].model)
  // Gigabytes = Bytes ÷ 1,073,741,824
  let gb = os.totalmem() / 1073741824
  console.log('RAM -> ',gb, "GB")
  let fmem = os.freemem() / 1073741824
  console.log('FREE REM -> ',fmem )
  console.log('HOME DIR -> ', os.homedir())
  console.log('HOST NAME -> ', os.hostname())
  console.log('LOAD AVG -> ', os.loadavg())
  // console.log('NET INTFACE -> ', os.networkInterfaces())
  console.log('PLATFORM -> ', os.platform())
  console.log('Release -> ', os.release())
  console.log('OS TYPE -> ', os.type())
  let time = os.uptime() / 3600
  let timeDays = time / 24
  let resTime = time >= 24 ? `${Math.floor(timeDays)} days` : time
  console.log('UP TIME -> ',resTime)
  console.log('User Info -> ',os.userInfo())
  console.log('OS VERSION -> ',os.version())  
}
module.exports = sysInfo

