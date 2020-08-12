function Config() {
  this.DOMAIN = 'http://jsonplaceholder.typicode.com';
  this.PATH = '/posts';
  this.SUCCESS_CODE = 200;
  this.INTERNAL_SERVER_ERROR = 500;
  this.TEST_URL = 'http://localhost:5000/';
  this.PORT = 5000;
}
module.exports = new Config();