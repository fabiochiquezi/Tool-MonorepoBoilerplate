import { errDBMsgs } from '../errDBMsgs'
import { scssDBMsgs } from '../scssDBMsgs'
import { findByIDApi } from '.'

describe('back/crud/mongo/findByID', () => {
    describe('if ok', () => {
        it('return data', async () => {
            const mock = jest.fn((data: Record<any, any>) => data)
            const Domain: any = { findById: mock }
            const find = await findByIDApi(Domain)('test')

            expect(Domain.findById).toBeCalledTimes(1)
            expect(Domain.findById).toBeCalledWith('test')
            expect(find).toEqual({
                findByID: true,
                message: scssDBMsgs.getByID,
                doc: 'test'
            })
            expect.assertions(3)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = { findById: jest.fn(err) }
            const find = await findByIDApi(Domain)('test')

            expect(Domain.findById).toBeCalledTimes(1)
            expect(Domain.findById).toBeCalledWith('test')
            expect(find).toEqual({
                findByID: false,
                message: errDBMsgs.notFoundOrDatabaseOff,
                doc: {}
            })
            expect.assertions(3)
        })
    })
})
