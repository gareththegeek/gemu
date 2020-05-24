import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import sinon = require('sinon')
import Bus from 'gemu-interfaces/dist/Bus'
import { testOperation } from '../../../helpers/6502'
import stx from '../../../../src/domain/operations/stx'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('stx', () => {
            it('should store the value in the x register at the address specified by parameter', () => {
                const writeStub = sinon.stub()
                const bus = {
                    read: sinon.stub(),
                    write: writeStub
                } as Bus
                const expected = 0x12
                const address = 0x5678

                testOperation(stx, { x: expected }, {}, address, bus)

                expect(writeStub).to.have.been.calledWith(address, expected)
            })
        })
    })
})
