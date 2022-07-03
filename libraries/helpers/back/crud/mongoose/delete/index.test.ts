import { errDBMsgs } from '../errDBMsgs'
import { deleteApi } from '.'
import { scssDBMsgs } from '../scssDBMsgs'

describe('back/crud/mongo/delete', () => {
    describe('if ok', () => {
        it('return data', async () => {
            const mock = jest.fn((data: Record<any, any>) => data)
            const Domain: any = { deleteOne: mock }
            const del = await deleteApi(Domain)('test')

            expect(Domain.deleteOne).toBeCalledTimes(1)
            expect(Domain.deleteOne).toBeCalledWith({ id: 'test' })
            expect(del).toEqual({ delete: true, message: scssDBMsgs.del })
            expect.assertions(3)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = { deleteOne: jest.fn(err) }
            const del = await deleteApi(Domain)('test')

            expect(Domain.deleteOne).toBeCalledTimes(1)
            expect(Domain.deleteOne).toBeCalledWith({ id: 'test' })
            expect(del).toEqual({ delete: false, message: errDBMsgs.err })
            expect.assertions(3)
        })
    })
})
