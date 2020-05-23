import { expect } from 'chai'
import getOperation from '../../../../src/domain/execute/getOperation'
import sinon = require('sinon')
import Instruction from '../../../../src/domain/Instruction'
import * as operationTableUnit from '../../../../src/domain/operations/operationTable'

describe('Unit', () => {
    describe('6502', () => {
        describe('getOperation', () => {
            let sandbox: sinon.SinonSandbox
            let getOperationTable: sinon.SinonStub

            beforeEach(() => {
                sandbox = sinon.createSandbox()
                getOperationTable = sandbox.stub(operationTableUnit, 'getOperationTable')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should return the operation with the matching mnemonic', () => {
                const expected = sinon.stub()
                const unexpected = sinon.stub()
                const table = {
                    expected: expected,
                    unexpected: unexpected
                }
                getOperationTable.returns(table)

                const instruction = {
                    mnemonic: 'expected'
                } as Instruction

                const uut = getOperation
                const actual = uut(instruction)

                expect(actual).to.be.equal(expected)
            })
        })
    })
})
