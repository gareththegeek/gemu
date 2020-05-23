import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import fetchOperand from '../../../../src/domain/fetch/fetchOperand'
import sinon = require('sinon')
import Bus from '../../../../src/infrastructure/Bus'
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('fetchOperand', () => {
            it('should read the specified number of bytes from the specified address', () => {
                const address = 0xbeef
                const size = 4
                const expected = [7, 8, 9, 10]
                const bus = {
                    write: sinon.stub(),
                    read: (a: number): number => expected[a - address]
                } as Bus

                const uut = fetchOperand
                const actual = uut(bus, address, size)

                expect(actual).to.deep.equal(expected)
            })
        })
    })
})
