const Url = require("../models").url;

const getAllShortenedUrl = (req, res, next) => {
  console.log(req.user.id);
  Url.findAll({ where : { userId: req.user.id }})
    .then(users => res.status(200).send(users));
}

const getShortenedUrl = (req, res, next) => {

  const {url} = req.query;

  const hash = ""; //create a hash function above and call it here to return hash
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