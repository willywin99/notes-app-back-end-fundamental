/* eslint-disable require-jsdoc */
const {Pool} = require('pg');

class AuthenticationsService {
  constructor() {
    this._pool = new Pool();
  }
}
