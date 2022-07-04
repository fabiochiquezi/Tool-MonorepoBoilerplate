import { errDBMsgs } from '../errDBMsgs'
import { scssDBMsgs } from '../scssDBMsgs'
import { findByIDAndDeleteApi } from '.'

describe('back/crud/mongo/findByIDAndDelete', () => {
    describe('if ok', () => {
        it('return data', async () => {
            const mock = jest.fn((data: Record<any, any>) => data)
            const Domain: any = { findByIdAndDelete: mock }
            const find = await findByIDAndDeleteApi(Domain)('test')

            expect(Domain.findByIdAndDelete).toBeCalledTimes(1)
            expect(Domain.findByIdAndDelete).toBeCalledWith('test')
            expect(find).toEqual({
                del: true,
                message: scssDBMsgs.del
            })
            expect.assertions(3)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = { findByIdAndDelete: jest.fn(err) }
            const find = await findByIDAndDeleteApi(Domain)('test')

            expect(Domain.findByIdAndDelete).toBeCalledTimes(1)
            expect(Domain.findByIdAndDelete).toBeCalledWith('test')
            expect(find).toEqual({
                del: false,
                message: errDBMsgs.notFoundOrDatabaseOff
            })
            expect.assertions(3)
        })
    })
})
