import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import sinon = require('sinon')
import { Bus } from 'gemu-interfaces'
import { testOperation } from '../../../helpers/6502'
import sty from '../../../../src/domain/operations/sty'
import { buildBus } from '../../../helpers/factories'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('sty', () => {
            it('should store the value in the y register at the address specified by parameter', () => {
                const bus = buildBus()
                const expected = 0x12
                const address = 0x5678

                testOperation(sty, { y: expected }, {}, address, bus)

                expect(bus.writeCommand).to.have.been.calledWith(address, expected)
            })
        })
    })
})
