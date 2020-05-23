import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import getAddressingMode from '../../../../src/domain/fetch/getAddressingMode'
import sinon = require('sinon')
import Bus from '../../../../src/infrastructure/Bus'
import DataRegisters from '../../../../src/domain/DataRegisters'
import * as addressingModeTableUnit from '../../../../src/domain/addressingModes/addressingModeTable'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('getAddressingMode', () => {
            let sandbox: sinon.SinonSandbox
            let getAddressingModeTable: sinon.SinonStub

            beforeEach(() => {
                sandbox = sinon.createSandbox()
                getAddressingModeTable = sandbox.stub(addressingModeTableUnit, 'getAddressingModeTable')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should return the result of the addressing mode matching the requested type', () => {
                const expected = 8
                const expectedStub = sinon.stub()
                expectedStub.returns(expected)
                const unexpectedStub = sinon.stub()
                const table = {
                    expected: expectedStub,
                    unexpected: unexpectedStub
                }
                getAddressingModeTable.returns(table)

                const bus = {} as Bus
                const operand = [0]
                const registers = {} as DataRegisters

                const uut = getAddressingMode
                const actual = uut(bus, 'EXPECTED', operand, registers)

                expect(actual).to.be.equal(expected)
                expect(expectedStub).to.have.been.calledWith(bus, operand, registers)
            })
        })
    })
})
