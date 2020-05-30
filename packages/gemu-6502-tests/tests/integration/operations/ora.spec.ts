import { expect } from 'chai'
import { build6502System } from '../../helpers/factories'
import { initialiseSystem, loadRom } from '../../helpers/6502'

describe('Integration', () => {
    describe('6502', () => {
        describe('ora', () => {
            it('should correctly execute the ora command with immediate addressing', () => {
                const system = build6502System()
                loadRom(system.rom, [0x09, 0xf0])
                initialiseSystem(system)

                const { cpu } = system
                cpu.component.clockCommand()
                const actual = cpu.store.read()

                expect(actual.a).to.be.equal(0xf0)
                expect(actual.status.zero).to.be.false
                expect(actual.status.negative).to.be.true
            })
        })
    })
})
