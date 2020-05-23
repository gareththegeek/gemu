import { SinonStubbedInstance } from 'sinon'
import * as chai from 'chai'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import stateQuery from '../../../../src/application/queries/stateQuery'
import Store from '../../../../src/persistance/Store'
import { build6502State } from '../../../helpers/factories'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('stateQuery', () => {
            it('should return contents of Store', () => {
                const expected = build6502State()
                const store = {
                    read: sinon.stub(),
                    write: sinon.stub()
                } as SinonStubbedInstance<Store>

                store.read.returns(expected)

                const uut = stateQuery(store)
                const actual = uut()
                
                expect(actual).to.deep.equal(expected)
            })
        })
    })
})