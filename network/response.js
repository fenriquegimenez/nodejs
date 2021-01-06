exports.success = (req, res, msg, stat, details) => {
  console.log(details);
  res.status(stat || 200).send({
    error: '',
    body: msg,
  });
};

exports.error = (req, res, msg, stat, details) => {
  console.log(details);
  res.status(stat || 500).send({
    error: msg,
    body: '',
  });
};
