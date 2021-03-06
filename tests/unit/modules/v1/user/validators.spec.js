const rfr = require('rfr')
const chai = require('chai')
const expect = chai.expect

const request = rfr('./tests/helpers/request')
const validators = rfr('./modules/v1/user/validators')

describe('Module User: Validators', () => {
  let req
  let checkBody
  let notEmpty
  let len
  let isEmail
  let getValidationResult

  beforeEach(() => {
    req = request.stubReq()
    checkBody = request.stubCheckBody(req)
    notEmpty = request.stubNotEmpty(req)
    len = request.stubLen(req)
    isEmail = request.stubIsEmail(req)
    getValidationResult = request.stubGetValidationResult(req)
  })

  afterEach(() => {
    checkBody.restore()
    notEmpty.restore()
    len.restore()
    isEmail.restore()
    getValidationResult.restore()
  })

  it('should have all the required methods registred', () => {
    expect(validators).to.contain.all.keys(['create', 'replace', 'update', 'email', 'uniqueEmailValidator'])
  })

  describe('Method Create', () => {
    beforeEach(() => {
      validators.create(req, request.res, () => {})
    })
    it('should be a function', () => {
      expect(validators.create).to.be.a('function')
    })
    it('should call checkBody 6 times', () => {
      expect(checkBody.called).to.be.true
      expect(checkBody.callCount).to.equal(6)
    })
    it('should call len 2 times', () => {
      expect(len.called).to.be.true
      expect(len.callCount).to.equal(2)
    })
    it('should call notEmpty 3 times', () => {
      expect(notEmpty.called).to.be.true
      expect(notEmpty.callCount).to.equal(3)
    })
    it('should call isEmail once', () => {
      expect(isEmail.called).to.be.true
      expect(isEmail.callCount).to.equal(1)
    })
    it('should verify name required', () => {
      expect(checkBody.calledWith('name', {error: 'required'})).to.be.true
    })
    it('should verify name length', () => {
      expect(checkBody.calledWith('name', {error: 'length', min: 4, max: 20})).to.be.true
    })
    it('should verify email required', () => {
      expect(checkBody.calledWith('email', {error: 'required'})).to.be.true
    })
    it('should verify email valid', () => {
      expect(checkBody.calledWith('email', {error: 'invalid'})).to.be.true
    })
    it('should verify password required', () => {
      expect(checkBody.calledWith('password', {error: 'required'})).to.be.true
    })
    it('should verify password length', () => {
      expect(checkBody.calledWith('password', {error: 'length', min: 6, max: 20})).to.be.true
    })
  })

  describe('Method Replace', () => {
    beforeEach(() => {
      validators.replace(req, request.res, () => {})
    })
    it('should be a function', () => {
      expect(validators.create).to.be.a('function')
    })
    it('should call checkBody 6 times', () => {
      expect(checkBody.called).to.be.true
      expect(checkBody.callCount).to.equal(6)
    })
    it('should call len 2 times', () => {
      expect(len.called).to.be.true
      expect(len.callCount).to.equal(2)
    })
    it('should call notEmpty 3 times', () => {
      expect(notEmpty.called).to.be.true
      expect(notEmpty.callCount).to.equal(3)
    })
    it('should call isEmail once', () => {
      expect(isEmail.called).to.be.true
      expect(isEmail.callCount).to.equal(1)
    })
    it('should verify name required', () => {
      expect(checkBody.calledWith('name', {error: 'required'})).to.be.true
    })
    it('should verify name length', () => {
      expect(checkBody.calledWith('name', {error: 'length', min: 4, max: 20})).to.be.true
    })
    it('should verify email required', () => {
      expect(checkBody.calledWith('email', {error: 'required'})).to.be.true
    })
    it('should verify email valid', () => {
      expect(checkBody.calledWith('email', {error: 'invalid'})).to.be.true
    })
    it('should verify password required', () => {
      expect(checkBody.calledWith('password', {error: 'required'})).to.be.true
    })
    it('should verify password length', () => {
      expect(checkBody.calledWith('password', {error: 'length', min: 6, max: 20})).to.be.true
    })
  })

  describe('Method Update', () => {
    beforeEach(() => {
      validators.update(req, request.res, () => {})
    })
    it('should be a function', () => {
      expect(validators.create).to.be.a('function')
    })
    it('should call checkBody twice', () => {
      expect(checkBody.called).to.be.true
      expect(checkBody.callCount).to.equal(2)
    })
    it('should call len once', () => {
      expect(len.called).to.be.true
      expect(len.callCount).to.equal(1)
    })
    it('should call isEmail once', () => {
      expect(isEmail.called).to.be.true
      expect(isEmail.callCount).to.equal(1)
    })
    it('should verify name length', () => {
      expect(checkBody.calledWith('name', {error: 'length', min: 4, max: 20})).to.be.true
    })
    it('should verify email valid', () => {
      expect(checkBody.calledWith('email', {error: 'invalid'})).to.be.true
    })
  })

  describe('Method Email', () => {
    beforeEach(() => {
      validators.email(req, request.res, () => {})
    })
    it('should be a function', () => {
      expect(validators.create).to.be.a('function')
    })
    it('should call checkBody twice', () => {
      expect(checkBody.called).to.be.true
      expect(checkBody.callCount).to.equal(2)
    })
    it('should call isEmail once', () => {
      expect(isEmail.called).to.be.true
      expect(isEmail.callCount).to.equal(1)
    })
    it('should verify email required', () => {
      expect(checkBody.calledWith('email', {error: 'required'})).to.be.true
    })
    it('should verify email valid', () => {
      expect(checkBody.calledWith('email', {error: 'invalid'})).to.be.true
    })
  })
})
