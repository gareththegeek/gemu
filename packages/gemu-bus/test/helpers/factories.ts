import { SinonStubbedInstance } from 'sinon'
import { RangedComponent } from 'gemu-interfaces'
import { Range } from 'gemu-interfaces'
import { Component } from 'gemu-interfaces'
import * as sinon from 'sinon'
import State from '../../src/domain/State'
import { Store } from 'gemu-interfaces'

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
