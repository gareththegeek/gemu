import { SinonStub, SinonSandbox, SinonStubbedInstance, createSandbox } from 'sinon'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import resetCommand from '../../../../src/application/commands/resetCommand'
import * as buildResetEventUnit from '../../../../src/domain/events/buildResetEvent'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../../../src/domain/State'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('resetCommand', () => {
            let sandbox: SinonSandbox
            let buildResetEvent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                buildResetEvent = sandbox.stub(buildResetEventUnit, 'buildResetEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should build a reset event and write it to the store', () => {
                const expected = { foo: 'bar' }
                buildResetEvent.returns(expected)

                const store = {
                    read: sandbox.stub(),
                    write: sandbox.stub()
                } as SinonStubbedInstance<Store<State>>

                const uut = resetCommand(store)
                uut()
                
                expect(store.write as SinonStub).to.have.been.calledWith(expected)
            })
        })
    })
})