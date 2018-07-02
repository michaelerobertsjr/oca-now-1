const chai = require('chai');
const chaiHttp = require('chai-http');
//const IO = require('socket.io-client');
const server = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

process.env.SOCKET_KEY = 'test';

describe('server.js', () => {
  beforeEach((done) => {
    server.listen(4444);
    done();
  });

  it('responds to /', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(err).not.exist;
        expect(res).to.have.status(200);
        done();
      });
  });

//   it('socket client can connect', (done) => {
//     const socket = new IO('ws://localhost:4444');
//     socket.on('connect', (err) => {
//       expect(err).to.eql(undefined);
//       done();
//     });
//   });

//   it('socket client authenticate and receive acknowledgements', (done) => {
//     const socket = new IO('ws://localhost:4444');
//     socket.emit('event', {
//       auth: 'test',
//       eventType: 'lesson:start',
//       payload: {
//         timestamp: new Date()
//       }
//     });
//     socket.on('event:ack', (msg) => {
//       expect(msg).exist;
//       done();
//     });
//   });
//   it('socket client will send tests results', (done) => {
//     const socket = new IO('ws://localhost:4444');
//     socket.emit('action', {
//       auth: 'test',
//       type: 'SERVER_TEST_PASSED',
//       payload: {
//         userId: 19,
//         projectName: 'startnow-web102-astro-weight-calculator',
//         fullName: 'Michael Roberts'
//       }
//     });
//     socket.on('action', (action) => {
//       expect(action).exist;
//       done();
//     });
//   });
});