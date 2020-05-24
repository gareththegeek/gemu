import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import sinon = require('sinon')
import Bus from 'gemu-interfaces/dist/Bus'
import { testOperation } from '../../../helpers/6502'
import stx from '../../../../src/domain/operations/stx'
import { buildBus } from '../../../helpers/factories'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('stx', () => {
            it('should store the value in the x register at the address specified by parameter', () => {
                const bus = buildBus()
                const expected = 0x12
                const address = 0x5678

                testOperation(stx, { x: expected }, {}, address, bus)

                expect(bus.writeCommand).to.have.been.calledWith(address, expected)
            })
        })
    })
})
