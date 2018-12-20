const redis = require('redis')
const client = redis.createClient()

client.on('error', (err) => {
  console.log('Error ', err)
})

client.on('connect', () => {
  console.log('Redis 连接成功')
})

client.set('string key', 'string val', redis.print)

client.get('string key', redis.print)
