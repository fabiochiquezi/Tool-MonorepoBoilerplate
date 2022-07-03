import { resp } from './index'

const resMock: any = {
    status: (dataStatus: number) => ({
        json: (dataJSON: Record<any, any>) => ({
            end: jest.fn(() => ({
                status: dataStatus,
                data: dataJSON
            }))
        })
    })
}

describe('back/responses/default', () => {
    it('return success data', () => {
        const res = resp(resMock, 200, true, 'test', { data: 'test' })
        expect(res).toEqual({
            status: 200,
            data: {
                ok: true,
                message: 'test',
                data: { data: 'test' }
            }
        })
    })

    it('return false data', () => {
        const res = resp(resMock, 400, false, 'error', { data: 'error' })
        expect(res).toEqual({
            status: 400,
            data: {
                ok: false,
                message: 'error',
                data: { data: 'error' }
            }
        })
    })

    it('miss data', () => {
        const res = resp(resMock, 400, false)
        expect(res).toEqual({
            status: 400,
            data: {
                ok: false,
                message: '',
                data: {}
            }
        })
    })
})
