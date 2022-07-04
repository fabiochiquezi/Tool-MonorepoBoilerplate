import { signOutStandard } from '.'
import { response } from 'helpers-front'
import { getError } from '../errMessages'
import { successMessage } from '../successMessages'

const authMock: any = jest.fn(() => true)

describe('/signOut', () => {
    describe('if success', () => {
        it('return data', async () => {
            const mockFn = (auth: any, email: string, password: string) => true
            const signOutMock: any = jest.fn(mockFn)

            const signoutStd = signOutStandard(
                response,
                getError,
                successMessage,
                signOutMock
            )
            const signout = await signoutStd(authMock)()

            expect(signout).toEqual({
                ok: true,
                message: successMessage.signOut,
                data: {},
                status: 200
            })
            expect(signOutMock).toBeCalledTimes(1)
            expect.assertions(2)
        })
    })

    describe('if error', () => {
        it('return data', async () => {
            const mockFn = (auth: any, email: string, password: string) => {
                throw new Error('test')
            }
            const signOutMock: any = jest.fn(mockFn)

            const signoutStd = signOutStandard(
                response,
                getError,
                successMessage,
                signOutMock
            )
            const signout = await signoutStd(authMock)()

            expect(signout.ok).toBeFalsy()
            expect(signout.status).toBe(400)
            expect(signOutMock).toBeCalledTimes(1)
            expect.assertions(3)
        })
    })
})
