var ip2Number = ip => ip.split('.').reduce((t, n) => t * 256 + +n)
var number2Ip = num => [24, 16, 8, 0].map(d => num >> d & 255).join('.')

function ipv4Parser(ip, mask) {
  var numIp   = ip2Number(ip)
  var numMask = ip2Number(mask)
  var subnet  = number2Ip(numIp &  numMask)
  var host    = number2Ip(numIp & ~numMask)
  return [subnet, host]
}