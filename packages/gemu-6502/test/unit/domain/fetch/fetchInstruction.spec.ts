import fetchInstruction from '../../../../src/domain/fetch/fetchInstruction'
import sinon = require('sinon')
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import buildInstruction from '../../../../src/domain/fetch/buildInstruction'
import * as instructionTableUnit from '../../../../src/domain/fetch/instructionTable'
import { buildBus } from '../../../helpers/factories'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('fetchInstruction', () => {
            let sandbox: sinon.SinonSandbox
            let getInstructionTable: sinon.SinonStub

            beforeEach(() => {
                sandbox = sinon.createSandbox()
                getInstructionTable = sandbox.stub(instructionTableUnit, 'getInstructionTable')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should return the entry from the instruction table which matches the opcode at specified address', () => {
                const expected = buildInstruction(0x06, 'EXP', 'IMM', 1, 2, true)
                const unexpected = buildInstruction(0x00, 'UNX', 'IMM', 2, 3, true)
                const table = {
                    0x00: unexpected,
                    0x06: expected
                }
                getInstructionTable.returns(table)

                const expectedAddress = 0x123
                const bus = buildBus()
                bus.readQuery.returns(expected.opcode)

                const uut = fetchInstruction
                const actual = uut(bus, expectedAddress)

                expect(bus.readQuery).to.have.been.calledWith(expectedAddress)
                expect(actual).to.deep.equal(expected)
            })

            it('should return zero instruction if invalid opcode is located at specified adderss', () => {
                const expected = buildInstruction(0x00, 'EXP', 'IMM', 1, 2, true)
                const unexpected = buildInstruction(0x06, 'UNX', 'IMM', 2, 3, true)
                const table = {
                    0x00: expected,
                    0x06: unexpected
                }
                getInstructionTable.returns(table)
                
                const expectedAddress = 0x123
                const bus = buildBus()
                bus.readQuery.returns(expected.opcode + 1)

                const uut = fetchInstruction
                const actual = uut(bus, expectedAddress)

                expect(bus.readQuery).to.have.been.calledWith(expectedAddress)
                expect(actual).to.deep.equal(expected)
            })
        })
    })
})
