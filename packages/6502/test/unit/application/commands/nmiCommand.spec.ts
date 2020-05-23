import { SinonStub, SinonSandbox, SinonStubbedInstance, createSandbox } from 'sinon'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import nmiCommand from '../../../../src/application/commands/nmiCommand'
import * as buildNmiEventUnit from '../../../../src/domain/events/buildNmiEvent'
import Store from '../../../../src/persistance/Store'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('nmiCommand', () => {
            let sandbox: SinonSandbox
            let buildNmiEvent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                buildNmiEvent = sandbox.stub(buildNmiEventUnit, 'buildNmiEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should build an nmi event and write it to the store', () => {
                const expected = { foo: 'bar' }
                buildNmiEvent.returns(expected)

                const store = {
                    read: sandbox.stub(),
                    write: sandbox.stub()
                } as SinonStubbedInstance<Store>

                const uut = nmiCommand(store)
                uut()
                
                expect(store.write as SinonStub).to.have.been.calledWith(expected)
            })
        })
    })
})