import { errDBMsgs } from '../errDBMsgs'
import { postApi } from '.'

describe('back/crud/mongo/post', () => {
    describe('if error', () => {
        it('return data', async () => {
            const err = () => {
                throw new Error('test')
            }
            const Domain: any = { save: jest.fn(err) }
            const post = await postApi(Domain)('test')
            expect(post).toEqual({
                post: false,
                message: errDBMsgs.err,
                item: {}
            })
        })
    })
})
