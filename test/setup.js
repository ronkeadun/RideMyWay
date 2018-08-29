process.env.NODE_ENV = 'test'

process.env.DB_USER_TEST='ronke'
process.env.DB_HOST_TEST='localhost'
process.env.DB_NAME_TEST='ridesDB'
process.env.DB_PASSWORD_TEST=3377
process.env.DB_PORT_TEST=5432

const chai = require('chai');
global.expect = chai.expect;