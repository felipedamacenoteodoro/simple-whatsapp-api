var bodyParser = require('body-parser')
var express = require('express');
var venom = require('venom-bot');
const app = express(); 

app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

venom.create('laravel').then((client) => start(client));

function start(client) {
    
    app.post('/sendText', async (req, res, next) => {
        console.log(req.body.number,  req.body.text );
        await client
        .sendText(req.body.number + '@c.us', req.body.text)
        .then((result) => {
          console.log('Result: ', result); //return object success
          res.json('success');
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
          res.json('error');
        });   
        
    });

    app.post('/sendFile', async (req, res, next) => {
        console.log(req.body.number,  req.body.text );
        await client
        .sendFile(req.body.number + '@c.us', req.body.path, req.body.fileName, req.body.caption)
        .then((result) => {
          console.log('Result: ', result); //return object success
          res.json('success');
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
          res.json('error');
        });   
        
    });

    app.post('/sendAudio', async (req, res, next) => {
        console.log(req.body.number,  req.body.text );
        await client
        .sendFile(req.body.number + '@c.us', req.body.path, '', '')
        .then((result) => {
          console.log('Result: ', result); //return object success
          res.json('success');
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
          res.json('error');
        });   
        
    });

    app.post('/sendContact', async (req, res, next) => {
      console.log(req.body.number + '@c.us', req.body.contact + '@c.us', req.body.name);
        await client
        .sendContactVcard(req.body.number + '@c.us', req.body.contact + '@c.us', req.body.name)
        .then((result) => {
          console.log('Result: ', result); //return object success
          res.json('success');
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
          res.json('error');
        });   
        
    });

    app.post('/sendLocation', async (req, res, next) => {
        await client
        .sendLocation(req.body.number + '@c.us', req.body.lat, req.body.log, `${req.body.title}\n${req.body.description}`)
        .then((result) => {
          console.log('Result: ', result); //return object success
          res.json('success');
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
          res.json('error');
        });   
        
    });

    app.post('/sendFile64', async (req, res, next) => {
        console.log(req.body.number,  req.body.text );
        await client
        .sendFileFromBase64(req.body.number + '@c.us', req.body.path, req.body.fileName, req.body.caption)
        .then((result) => {
          console.log('Result: ', result); //return object success
          res.json('success');
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
          res.json('error');
        });   
        
    });

    app.post('/sendButtons', async (req, res, next) => {
        console.log(req.body.number,  req.body.text );
        
          await client.sendButtons(req.body.number + '@c.us', 'Title', buttons, 'Description')
            .then((result) => {
                console.log('Result: ', result); //return object success
                res.json('success');
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
                res.json('error');
            });
        
    });

    app.listen(3333, () => {
        console.log('Server running on port 3333');
    });

}