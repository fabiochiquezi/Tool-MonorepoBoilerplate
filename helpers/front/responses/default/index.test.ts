import { response } from './index'

describe('front/responses/default', () => {
    it('return success data', () => {
        const res = response(true, 'success', { data: 'data' }, 200)
        expect(res).toEqual({
            ok: true,
            message: 'success',
            data: { data: 'data' },
            status: 200
        })
    })

    it('if return errors', () => {
        const res = response(false, 'error', { data: 'data' }, 400)
        expect(res).toEqual({
            ok: false,
            message: 'error',
            data: { data: 'data' },
            status: 400
        })
    })

    it('if miss data', () => {
        const res = response(false, 'error')
        expect(res).toEqual({
            ok: false,
            message: 'error',
            data: {},
            status: 0
        })
    })
})
