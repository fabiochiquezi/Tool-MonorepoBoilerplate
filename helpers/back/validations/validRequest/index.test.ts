import { validRequest } from './index'

describe('/back/validations/validRequest', () => {
    describe('if success', () => {
        it('return data', () => {
            const validMock = (boo: boolean) => ({
                isEmpty: jest.fn(() => boo)
            })
            const dataMock: any = true
            const valid = validRequest(validMock)(dataMock)
            expect(valid).toEqual({ valid: true, errors: [] })
        })
    })

    describe('if error', () => {
        it('return data', () => {
            const validMock = (boo: boolean) => ({
                isEmpty: jest.fn(() => boo),
                array: jest.fn(() => ['test'])
            })
            const dataMock: any = false
            const valid = validRequest(validMock)(dataMock)
            expect(valid).toEqual({ valid: false, errors: ['test'] })
        })
    })
})
