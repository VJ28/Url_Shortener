const Url = require("../models").url;

function getHash() {   
  var text = '';    
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       for (var i = 0; i < 5; i++)        
  text += possible.charAt(Math.floor(Math.random() * possible.length));    
  return text;
  }

const getAllShortenedUrl = (req, res, next) => {
  console.log(req.user.id);
  Url.findAll({ where : { userId: req.user.id }})
    .then(users => res.status(200).send(users));
}

const getShortenedUrl = (req, res, next) => {

  const {url} = req.query;
  const hash = getHash();
  console.log(hash, req.user.id);
  Url.create({
    url,
    hash,
    userId: req.user.id,
  }).then(url => {
    res.status(200).send(url);
  }).catch(err => {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  });

  return hash;
};

module.exports = {
  getShortenedUrl,
  getAllShortenedUrl
};