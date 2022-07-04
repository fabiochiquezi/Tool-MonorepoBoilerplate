import { signUpStandard } from '.'
import { response } from 'helpers-front'
import { getError } from '../errMessages'
import { successMessage } from '../successMessages'

const authMock: any = jest.fn(() => true)

describe('/singUp', () => {
    describe('if success', () => {
        it('return data', async () => {
            const mockFn = (auth: any, email: string, password: string) => true
            const signUpMock: any = jest.fn(mockFn)

            const data = { email: 'test@example.com', password: 'password' }
            const signStd = signUpStandard(response, getError, signUpMock)
            const sign = await signStd(authMock)(data)

            expect(sign).toEqual({
                ok: true,
                message: successMessage.signUp,
                data: { newUser: true },
                status: 201
            })
            expect(signUpMock).toBeCalledTimes(1)
            expect.assertions(2)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const mockFn = (auth: any, email: string, password: string) => {
                throw new Error('test')
            }
            const signUpMock: any = jest.fn(mockFn)

            const data = { email: 'test@example.com', password: 'password' }
            const signStd = signUpStandard(response, getError, signUpMock)
            const sign = await signStd(authMock)(data)

            expect(sign.data).toEqual({})
            expect(sign.ok).toBeFalsy()
            expect(sign.status).toBe(400)
            expect(signUpMock).toBeCalledTimes(1)
            expect.assertions(4)
        })
    })
})
