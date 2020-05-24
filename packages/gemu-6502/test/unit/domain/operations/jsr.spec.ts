import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import sinon = require('sinon')
import jsr from '../../../../src/domain/operations/jsr'
import Bus from 'gemu-interfaces/dist/Bus'
import { testOperation } from '../../../helpers/6502'
import { buildBus } from '../../../helpers/factories'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('jsr', () => {
            it('should push the program counter to the stack and set program counter equal to parameter', () => {
                const bus = buildBus()

                const actual = testOperation(jsr, { pc: 0x1234, sp: 0x78 }, {}, 0x4321, bus)

                expect(bus.writeCommand.getCall(0).args[0]).to.be.deep.equal(0x0178)
                expect(bus.writeCommand.getCall(0).args[1]).to.be.deep.equal(0x12)

                expect(bus.writeCommand.getCall(1).args[0]).to.be.deep.equal(0x0177)
                expect(bus.writeCommand.getCall(1).args[1]).to.be.deep.equal(0x34 - 1)
                
                expect(actual.sp).to.be.equal(0x78 - 2)
                expect(actual.pc).to.be.equal(0x4321)
            })
        })
    })
})
