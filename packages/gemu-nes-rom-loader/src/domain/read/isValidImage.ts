import { MAGIC_STRING } from '../constants'

export const isValidImage = (data: number[]) =>
    String.fromCharCode(...data.slice(0, MAGIC_STRING.length)) === MAGIC_STRING
