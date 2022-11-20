const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')
const cron = require('node-cron')

client.on('connect', function () {
    cron.schedule('*/10 * * * * *',()=>{
        client.publish('', function (err) {
            if (!err) {
              client.publish('',{

              })
            }
          })
    })
})