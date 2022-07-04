import { errDBMsgs } from '../errDBMsgs'
import { postApi } from '.'
import { scssDBMsgs } from '../scssDBMsgs'

describe('back/crud/mongo/post', () => {
    describe('if success', () => {
        it('return data', async () => {
            const mockFn = () => true
            const Domain: any = jest.fn(() => {
                return { save: mockFn }
            })
            const fn = await postApi(Domain)('test')

            expect(fn.post).toBeTruthy()
            expect(fn.message).toBe(scssDBMsgs.post)
            expect(Domain).toBeCalledTimes(1)
            expect(Domain).toBeCalledWith('test')
            expect.assertions(4)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = jest.fn(() => {
                return { save: err }
            })
            const post = await postApi(Domain)('test')

            expect(post).toEqual({
                post: false,
                message: errDBMsgs.err,
                item: {}
            })
            expect(Domain).toBeCalledTimes(1)
            expect(Domain).toBeCalledWith('test')
            expect.assertions(3)
        })
    })
})
