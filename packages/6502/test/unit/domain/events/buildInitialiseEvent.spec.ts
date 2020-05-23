import { expect } from 'chai'
import { buildInitialiseEvent } from '../../../../src/domain/events/buildInitialiseEvent'
import sinon = require('sinon')
import Bus from '../../../../src/infrastructure/Bus'

describe('Unit', () => {
    describe('6502', () => {
        describe('initialise', () => {
            it('should return an initialise state for the 6502 with correct number of initialisation cycles', () => {
                const bus = {
                    read: sinon.stub(),
                    write: sinon.stub()
                } as Bus

                const uut = buildInitialiseEvent
                const actual = uut(bus)

                expect(actual.a).to.be.equal(0)
                expect(actual.x).to.be.equal(0)
                expect(actual.y).to.be.equal(0)
                expect(actual.sp).to.be.equal(0xff)
                expect(actual.status.carry).to.be.false
                expect(actual.status.decimal).to.be.false
                expect(actual.status.irqDisable).to.be.false
                expect(actual.status.negative).to.be.false
                expect(actual.status.overflow).to.be.false
                expect(actual.status.zero).to.be.false
                expect(actual.initialised).to.be.true
                expect(actual.cycles).to.be.equal(6)
            })

            it('should read the initial value for the pc from addresses 0xfffc and 0fffd on the bus', () => {
                const expected = 0x1234
                const bus = {
                    read: (address: number): number => {
                        switch (address) {
                            case 0xfffc:
                                return 0x34
                            case 0xfffd:
                                return 0x12
                            default:
                                return 0x00
                        }
                    },
                    write: sinon.stub()
                } as Bus

                const uut = buildInitialiseEvent
                const actual = uut(bus)

                expect(actual.pc).to.be.equal(expected)
            })
        })
    })
})
