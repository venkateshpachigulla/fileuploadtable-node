var express = require('express');
var router = express.Router();
var { StringDecoder } = require('string_decoder');
var decoder = new StringDecoder('utf8');

router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

router.post('/', function (req, res, next) {
  console.log(req.files.file);
  if (req.files.file.mimetype === "text/plain") {
    res.send(decoder.write(req.files.file.data));
  } else {
    res.status(500).send("Currently supports only text files");
  }
});

module.exports = router;
