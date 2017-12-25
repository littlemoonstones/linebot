let express = require('express')
let line = require('@line/bot-sdk')

let lineAccount = require('./lineKey.json')
let client = new line.Client(lineAccount)

let app = express()

app.post('/webhook', line.middleware(lineAccount), function(req, res){
    let promise = []
    for(let event in req.body.events){
        promise.push(lineEvent(event))
    }

    Promise.all(promise).then(function (){
        res.status(200).send()
    }).catch(function() {
        res.status(400).send()
    })
})

let lineEvent = function (event) {
    return new Promise(function (resolve, reject) {
        if(event.type === 'message'){
            if(event.message.type === 'text'){
                let text = event.message.text
            }
        }
        else if(event.type == 'follow'){
            
        }
    })
}

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('listening on' + port)
})