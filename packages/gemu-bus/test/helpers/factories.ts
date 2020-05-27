import { SinonStubbedInstance } from 'sinon'
import RangedComponent from 'gemu-interfaces/dist/RangedComponent'
import Range from 'gemu-interfaces/dist/Range'
import Component from 'gemu-interfaces/dist/Component'
import * as sinon from 'sinon'
import State from '../../src/domain/State'
import Store from 'gemu-interfaces/dist/Store'

export const buildRange = (s?: number, f?: number): Range => ({
    start: s || 0,
    finish: f || 1
})

export const buildComponent = (): SinonStubbedInstance<Component> => ({
    readQuery: sinon.stub(),
    writeCommand: sinon.stub()
})

export const buildRangedComponent = (range?: Range): SinonStubbedInstance<RangedComponent> => ({
    component: buildComponent(),
    range: range || buildRange()
})

export const buildState = (): State => ({
    components: []
})

export const buildStore = (): SinonStubbedInstance<Store<State>> => ({
    read: sinon.stub(),
    write: sinon.stub(),
    overwrite: sinon.stub()
})
