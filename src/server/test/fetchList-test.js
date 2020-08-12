const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getList } = require('../controllers/FetchList');
const { DOMAIN, PATH, TEST_URL } = require('../config');
const request = require('request');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Fetching all the records', () => {
  describe('getList', () => {
    it('should return list of all records', async () => {
      request(TEST_URL, function(error, response, body) {
        expect(body.list).to.be.an('array');
      });
    });

    it('should return status true when request complete successfully', async () => {
      request(TEST_URL, function(error, response, body) {
        expect(body.status).to.equal('true');
      });
    });

    it('should return status code 200 when request complete successfully', async () => {
      request(TEST_URL, function(error, response, body) {
        expect(body.code).to.equal('200');
      });
    });

    it('should throw an error if the url is not working', async () => {
      nock(DOMAIN)
        .get(PATH)
        .query(true)
        .reply(500);

      await expect(getList()).to.be.rejected;
    });

    it('should throw an error if the request is not authorized (Unauthorized)', async () => {
      nock(DOMAIN)
        .get(PATH)
        .query(true)
        .reply(401);

      await expect(getList()).to.be.rejected;
    });

    it('should throw an error if the request is incorrect (Bad Request)', async () => {
      nock(DOMAIN)
        .get(PATH)
        .query(true)
        .reply(400);

      await expect(getList()).to.be.rejected;
    });
  });
});
