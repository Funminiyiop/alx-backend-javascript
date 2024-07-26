const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const peterRobot = sinon.spy(console);
    const testingData = sinon.stub(Utils, 'calculateNumber');

    testingData.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(testingData.calledWith('SUM', 100, 20)).to.be.true;
    expect(testingData.callCount).to.be.equal(1);
    expect(peterRobot.log.calledWith('The total is: 10')).to.be.true;
    expect(peterRobot.log.callCount).to.be.equal(1);
    testingData.restore();
    peterRobot.log.restore();
  });
});
