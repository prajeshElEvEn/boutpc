const os = require("os")

console.log("------------------------")
console.log("boutPC - Know You PC")
console.log("------------------------")
console.log("Hostname - ", os.hostname())
console.log("Username - ", os.userInfo().username)
console.log("Home directory - ", os.userInfo().homedir)
console.log("Shell - ", os.userInfo().shell)
console.log("Architecture - ", os.arch())
console.log("Platform - ", os.platform())
console.log("OS - ", os.type())
console.log("Release - ", os.release())

let tmem = Math.floor(os.totalmem() / (1024 * 1024))
console.log("Total Memory - ", tmem, "GBs")
let fmem = Math.floor(os.freemem() / (1024 * 1024))
console.log("Free Memory - ", fmem, "GBs")

let hours = Math.floor(os.uptime()/3600)
let min = Math.floor((os.uptime()%3600)/60)
console.log("Uptime - ", hours, "hrs", min, "min")
console.log("------------------------")