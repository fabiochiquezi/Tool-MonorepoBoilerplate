import { scssDBMsgs } from '../scssDBMsgs'
import { errDBMsgs } from '../errDBMsgs'
import { props } from './types'

export const updateOneApi: props = doc => async data => {
    try {
        doc.updateOne({ data })
        return { update: true, message: scssDBMsgs.put }
    } catch (e: any) {
        return {
            update: false,
            message: errDBMsgs.notFoundOrDatabaseOff
        }
    }
}
