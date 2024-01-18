require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//Example



const bodyParser = require("body-parser");


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

//Example


let middleware = app.use(bodyParser.urlencoded({extended: false})); 


app.post("/api/shorturl", middleware, (req, res) => {
  let inputUrl = req.body.url;
  {original_url: inputUrl};

  if (! /^https?:\/\/.*[.].+/.test(req.body.url)) {
    res.json({
      error: "invalid url"
    });
  } else {
      const urlObject = {
        "original_url": req.body.url,
        "short_url": urlCount
      }
    };

    urlList.push(urlObject);
    urlCount++;
    res.json(urlObject);
    
  let inputShortUrl = 1;

  Url.findOne({})
    .sort({short: "desc"})
    .exec((err, searchData) => {
      if(!err && searchData != undefined) {
        inputShortUrl = searchData.short + 1
      };
      if(!err){
        Url.findOneAndUpdate(
          {original: inputUrl},
          {original: inputUrl, short: inputShortUrl},
          {new: true, upsert: true},
          (err, data) => {
            if(!err){
              res.json({short_url: data.short})
            };
          }
        )
      };
    })
});
