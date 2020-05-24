import * as sinon from 'sinon'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import * as buildInterruptEventUnit from '../../../../src/domain/events/buildInterruptEvent'
import { buildNmiInterruptEvent } from '../../../../src/domain/events/buildNmiInterruptEvent'
import { build6502State } from '../../../helpers/factories'
import Bus from 'gemu-interfaces/dist/Bus'
import { NMI_VECTOR, B_NMI } from '../../../../src/domain/constants'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('buildNmiInterruptEvent', () => {
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

                const actual = buildNmiInterruptEvent(build6502State(), {} as Bus)

                expect(actual).to.deep.equal(expected)
            })

            it('should pass nmi vector and flag to buildInterruptEvent', () => {
                const state = build6502State()
                const bus = {} as Bus
                buildNmiInterruptEvent(state, bus)

                expect(buildInterruptEvent).to.have.been.calledWith(state, bus, NMI_VECTOR, B_NMI)
            })
        })
    })
})