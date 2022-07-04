import { signInStandard } from '.'
import { response } from 'helpers-front'
import { getError } from '../errMessages'
import { successMessage } from '../successMessages'

const authMock: any = jest.fn(() => true)

describe('/signIn', () => {
    describe('if success', () => {
        it('return data', async () => {
            const mockFn = (auth: any, email: string, password: string) => true
            const signInMock: any = jest.fn(mockFn)

            const data = { email: 'test@example.com', password: 'password' }
            const signStd = signInStandard(
                response,
                getError,
                successMessage,
                signInMock
            )
            const sign = await signStd(authMock)(data)

            expect(sign).toEqual({
                ok: true,
                message: successMessage.signIn,
                data: { data: { credential: true, user: undefined } },
                status: 200
            })
            expect(signInMock).toBeCalledTimes(1)
            expect.assertions(2)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const mockFn = (auth: any, email: string, password: string) => {
                throw new Error('test')
            }
            const signInMock: any = jest.fn(mockFn)

            const data = { email: 'test@example.com', password: 'password' }
            const signStd = signInStandard(
                response,
                getError,
                successMessage,
                signInMock
            )
            const sign = await signStd(authMock)(data)

            expect(sign.ok).toBeFalsy()
            expect(sign.status).toBe(400)
            expect(signInMock).toBeCalledTimes(1)
            expect.assertions(3)
        })
    })
})
