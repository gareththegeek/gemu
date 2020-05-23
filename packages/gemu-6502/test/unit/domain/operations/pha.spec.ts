import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import sinon = require('sinon')
import pha from '../../../../src/domain/operations/pha'
import Bus from '../../../../src/infrastructure/Bus'
import { testOperation } from '../../../helpers/6502'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('pha', () => {
            it('should store the value in the accumulator at the address specified by stack pointer and decrement stack pointer', () => {
                const writeStub = sinon.stub()
                const bus = {
                    read: sinon.stub(),
                    write: writeStub
                } as Bus
                const expected = 0x12

                const actual = testOperation(pha, { a: expected, sp: 0x78 }, {}, 0x00, bus)

                expect(writeStub).to.have.been.calledWith(0x0178, expected)
                expect(actual.sp).to.be.equal(0x78 - 1)
            })
        })
    })
})
