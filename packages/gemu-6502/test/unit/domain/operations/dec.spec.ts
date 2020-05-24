import dec from '../../../../src/domain/operations/dec'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
import * as sinonChai from 'sinon-chai'
import { buildBus } from '../../../helpers/factories'
chai.use(chaiSubset)
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('dec', () => {
            it('should decrement value at address specified by parameter', () => {
                const bus = buildBus()
                const address = 0x1234
                const expected = 0x31
                bus.readQuery.returns(expected + 1)

                testOperation(dec, {}, {}, address, bus)

                expect(bus.readQuery).to.have.been.calledWith(address)
                expect(bus.writeCommand).to.have.been.calledWith(address, expected)
            })

            it('should set zero flag if decremented value is zero', () => {
                const bus = buildBus()
                const address = 0x1234
                bus.readQuery.returns(0x01)

                const actual = testOperation(dec, {}, { zero: false }, address, bus)

                expect(actual.status.zero).to.be.true
            })

            it('should clear zero and negative flags if decremented value is positive', () => {
                const bus = buildBus()
                const address = 0x1234
                bus.readQuery.returns(0x10)

                const actual = testOperation(dec, {}, { zero: true, negative: true }, address, bus)

                expect(actual.status.zero).to.be.false
                expect(actual.status.negative).to.be.false
            })

            it('should set negative flag if decremented value is negative', () => {
                const bus = buildBus()
                const address = 0x1234
                bus.readQuery.returns(0xf6)

                const actual = testOperation(dec, {}, { negative: false }, address, bus)

                expect(actual.status.negative).to.be.true
            })
        })
    })
})
