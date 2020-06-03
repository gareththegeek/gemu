import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import brk from '../../../../src/domain/operations/brk'
import { IRQ_VECTOR, B_BRK } from '../../../../src/domain/constants'
import { build6502State, buildBus } from '../../../helpers/factories'
import * as buildInterruptEventUnit from '../../../../src/domain/events/buildInterruptEvent'
chai.use(chaiSubset)
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('brk', () => {
            let sandbox: sinon.SinonSandbox
            let buildInterruptEvent: sinon.SinonStub

            beforeEach(() => {
                sandbox = sinon.createSandbox()
                buildInterruptEvent = sandbox.stub(buildInterruptEventUnit, 'buildInterruptEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should perform an interrupt with the IRQ vector and break flag set', () => {
                const previous = build6502State()
                previous.status.break = false
                const expected = build6502State()
                expected.status.break = true
                buildInterruptEvent.returns(expected)
                const bus = buildBus()

                const uut = brk
                const actual = uut(previous, bus, 0x00)

                expect(buildInterruptEvent).to.be.calledWith(previous, bus, IRQ_VECTOR, B_BRK)
                expect(actual).to.be.deep.equal(expected)
            })
        })
    })
})
