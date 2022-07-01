import { resp } from './index'

describe('helpers/response/resFirebase', () => {
    describe('if success', () => {
        it('return success data', () => {
            const res = resp(true, 200, 'success', { data: 'data' })
            expect(res).toEqual({
                ok: true,
                status: 200,
                message: 'success',
                data: { data: 'data' }
            })
        })
    })

    describe('if error', () => {
        it('return errors data', () => {
            const res = resp(false, 400, 'error', { data: 'data' })
            expect(res).toEqual({
                ok: false,
                status: 400,
                message: 'error',
                data: { data: 'data' }
            })
        })
    })
})
