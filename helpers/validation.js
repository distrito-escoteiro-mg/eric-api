const handleValidation = (req, res, next) => {
  return req.getValidationResult().then((result) => {
    console.log(result.array())
    if (!result.isEmpty()) {
      let errors = result.useFirstErrorOnly().mapped()
      res.status(422).json(errors)
      return false
    } else {
      next()
    }
  })
}

module.exports = handleValidation
