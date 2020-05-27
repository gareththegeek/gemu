import * as sinon from 'sinon'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import * as buildInterruptEventUnit from '../../../../src/domain/events/buildInterruptEvent'
import { buildIrqInterruptEvent } from '../../../../src/domain/events/buildIrqInterruptEvent'
import { build6502State } from '../../../helpers/factories'
import { Bus } from 'gemu-interfaces'
import { IRQ_VECTOR, B_IRQ } from '../../../../src/domain/constants'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('buildIrqInterruptEvent', () => {
            let sandbox: sinon.SinonSandbox
            let buildInterruptEvent: sinon.SinonStub

            beforeEach(() => {
                sandbox = sinon.createSandbox()
                buildInterruptEvent = sandbox.stub(buildInterruptEventUnit, 'buildInterruptEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should return result of buildInterruptEvent', () => {
                const expected = { foo: 'bar' }
                buildInterruptEvent.returns(expected)

                const actual = buildIrqInterruptEvent(build6502State(), {} as Bus)

                expect(actual).to.deep.equal(expected)
            })

            it('should pass irq vector and flag to buildInterruptEvent', () => {
                const state = build6502State()
                const bus = {} as Bus
                buildIrqInterruptEvent(state, bus)

                expect(buildInterruptEvent).to.have.been.calledWith(state, bus, IRQ_VECTOR, B_IRQ)
            })
        })
    })
})