import { errDBMsgs } from '../errDBMsgs'
import { scssDBMsgs } from '../scssDBMsgs'
import { updateOneApi } from '.'

describe('back/crud/mongo/updateOne', () => {
    describe('if ok', () => {
        it('return data', async () => {
            const mock = jest.fn((data: Record<any, any>) => data)
            const Domain: any = { updateOne: mock }
            const update = await updateOneApi(Domain)('test')

            expect(update).toEqual({
                update: true,
                message: scssDBMsgs.put
            })
            expect(Domain.updateOne).toBeCalledTimes(1)
            expect(Domain.updateOne).toBeCalledWith({ data: 'test' })
            expect.assertions(3)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = { updateOne: jest.fn(err) }
            const update = await updateOneApi(Domain)('test')

            const errMsg = errDBMsgs.notFoundOrDatabaseOff
            expect(update).toEqual({ update: false, message: errMsg })
            expect(Domain.updateOne).toBeCalledTimes(1)
            expect(Domain.updateOne).toBeCalledWith({ data: 'test' })
            expect.assertions(3)
        })
    })
})
