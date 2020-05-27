import State from '../../src/domain/State'
import { SinonStubbedInstance } from 'sinon'
import sinon = require('sinon')
import Store from 'gemu-interfaces/dist/Store'

export const buildState = (): State => ({
    data: [],
    initialised: false
})

export const buildStore = (): SinonStubbedInstance<Store<State>> => ({
    read: sinon.stub(),
    write: sinon.stub(),
    overwrite: sinon.stub()
})
