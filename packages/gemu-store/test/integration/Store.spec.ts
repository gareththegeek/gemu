import * as chai from 'chai'
import { buildStore } from '../../src/Store'
const expect = chai.expect

describe('Store', () => {
    describe('Integration', () => {
        describe('multiple reads and writes', () => {
            interface TestInterface {
                a: number
                b: string
                c: {
                    d: string[]
                    e: boolean
                }
            }

            it('should merge changes into existing state and return result when read', () => {
                const store = buildStore<TestInterface>()
                expect(store.read()).to.deep.equal({})

                store.write({ a: 4 })
                expect(store.read()).to.deep.equal({ a: 4 })

                store.write({ b: 'foo' })
                expect(store.read()).to.deep.equal({ a: 4, b: 'foo' })

                store.write({ c: { d: ['hello', 'world'] } })
                expect(store.read()).to.deep.equal({
                    a: 4,
                    b: 'foo',
                    c: {
                        d: ['hello', 'world']
                    }
                })

                store.write({ b: 'bar', c: { d: [], e: false } })
                expect(store.read()).to.deep.equal({
                    a: 4,
                    b: 'bar', 
                    c: {
                        d: ['hello', 'world'],
                        e: false
                    }
                })
            })

            it('should return a shallow copy of state when read and not disclose the underlying state reference', () => {
                const expected = { foo: 'bar' }
                const store = buildStore()

                store.write(expected)
                const actual = store.read()

                expect(actual).to.deep.equal(expected)
                expect(actual).not.to.equal(expected)
            })
        })

        describe('overwrite', () => {
            it('should totally replace state with specified new state', () => {
                const store = buildStore()
                store.write({
                    foo: 'bar',
                    nested: {
                        value: 'string1'
                    }
                })
                
                const expected = {
                    nested: {
                        value: 'string2'
                    }
                }
                store.overwrite(expected)

                const actual = store.read()

                expect(actual).to.be.deep.equal(expected)
            })

            it('should replace arrays', () => {
                const store = buildStore()
                store.write({
                    array: [1, 2, 3]
                })
                
                const expected = {
                    array: [5, 6, 7, 8]
                }
                store.overwrite(expected)

                const actual = store.read()

                expect(actual).to.be.deep.equal(expected)
            })
        })
    })
})
