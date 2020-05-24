import plp from '../../../../src/domain/operations/plp'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import { buildBus } from '../../../helpers/factories'
chai.use(chaiSubset)
chai.use(sinonChai)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('plp', () => {
            ;[
                {
                    expectation: {
                        carry: true,
                        zero: true,
                        irqDisable: true,
                        decimal: true,
                        overflow: true,
                        negative: true
                    },
                    status: 0xff
                },
                {
                    expectation: {
                        carry: false,
                        zero: false,
                        irqDisable: false,
                        decimal: false,
                        overflow: false,
                        negative: false
                    },
                    status: 0x30
                },
                {
                    expectation: {
                        carry: false,
                        zero: true,
                        irqDisable: false,
                        decimal: true,
                        overflow: false,
                        negative: true
                    },
                    status: 0xba
                },
                {
                    expectation: {
                        carry: true,
                        zero: false,
                        irqDisable: true,
                        decimal: false,
                        overflow: true,
                        negative: false
                    },
                    status: 0x75
                }
            ].forEach(item => {
                it('should load data at stack pointer into status register and increment stack pointer', () => {
                    const bus = buildBus()
                    bus.readQuery.returns(item.status)

                    const actual = testOperation(plp, { sp: 0x87 }, {}, 0x00, bus)

                    expect(bus.readQuery).to.have.been.calledWith(0x0188)
                    expect(actual).to.containSubset({
                        sp: 0x88,
                        status: item.expectation
                    })
                })
            })
        })
    })
})
