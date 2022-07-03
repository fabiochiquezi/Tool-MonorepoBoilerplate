import { errDBMsgs } from '../errDBMsgs'
import { scssDBMsgs } from '../scssDBMsgs'
import { getApi } from '.'

describe('back/crud/mongo/get', () => {
    describe('if ok', () => {
        it('return data', async () => {
            const mock = jest.fn(() => 'test')
            const Domain: any = { find: mock }
            const docs = await getApi(Domain)

            expect(Domain.find).toBeCalledTimes(1)
            expect(docs).toEqual({
                get: true,
                message: scssDBMsgs.get,
                docs: 'test'
            })
            expect.assertions(2)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = { find: jest.fn(err) }
            const docs = await getApi(Domain)

            expect(Domain.find).toBeCalledTimes(1)
            expect(docs).toEqual({
                get: false,
                message: errDBMsgs.err,
                docs: {}
            })
            expect.assertions(2)
        })
    })
})
