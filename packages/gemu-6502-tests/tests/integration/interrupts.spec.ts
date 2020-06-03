import { build6502System } from '../helpers/factories'
import { expect } from 'chai'
import { loadRom } from '../helpers/6502'

describe('Integration', () => {
    describe('6502', () => {
        describe('irq', () => {
            it('should trigger the interrupt procedure when the clock tick reaches zero', () => {
                const system = build6502System()
                loadRom(system.rom, [0xfe, 0xff])

                const { component } = system.cpu
                component.resetCommand()
                component.clockCommand()
                system.cpu.store.write({ status: { irqDisable: false }})
                component.clockCommand()
                component.irqCommand()
                component.clockCommand()
                component.clockCommand()
                component.clockCommand()
                component.clockCommand()
                component.clockCommand()

                let state = system.cpu.store.read()
                expect(state.irq).to.be.true
                expect(state.sp).to.be.equal(0xfd)
                expect(state.status.irqDisable).to.be.false

                component.clockCommand()

                state = system.cpu.store.read()
                expect(state.irq).to.be.false
                expect(state.sp).to.be.equal(0xfa)
                expect(state.status.irqDisable).to.be.true
            })
        })

        describe('nmi', () => {
            it('should trigger the interrupt procedure when the clock tick reaches zero', () => {
                const system = build6502System()
                loadRom(system.rom, [0xfe, 0xff])

                loadRom(system.rom, [0xfe, 0xff])

                const { component } = system.cpu
                component.resetCommand()
                component.clockCommand()
                system.cpu.store.write({ status: { irqDisable: false }})
                component.clockCommand()
                component.nmiCommand()
                component.clockCommand()
                component.clockCommand()
                component.clockCommand()
                component.clockCommand()
                component.clockCommand()

                let state = system.cpu.store.read()
                expect(state.nmi).to.be.true
                expect(state.sp).to.be.equal(0xfd)
                expect(state.status.irqDisable).to.be.false

                component.clockCommand()

                state = system.cpu.store.read()
                expect(state.nmi).to.be.false
                expect(state.sp).to.be.equal(0xfa)
                expect(state.status.irqDisable).to.be.true
            })
        })
    })
})
