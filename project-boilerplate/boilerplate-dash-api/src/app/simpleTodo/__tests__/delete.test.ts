import { reqJest, testURL } from '../../../helpers/test'
import { scssDBMsgs, errDBMsgs } from '../../../helpers'

describe('DELETE /simpleTodo:id', () => {
    const url = `${testURL}/simple-todo`
    let toDo: any

    beforeAll(async () => {
        const data = { content: 'test' }
        toDo = await reqJest(url, 'post', data)
    })

    describe('given a error or mistake', () => {
        it('as miss data on the database', async () => {
            expect.assertions(3)
            try {
                await reqJest(`${url}/000`, 'delete')
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errDBMsgs.notFoundOrDatabaseOff)
            }
        })

        it('as a problem in the database', async () => {})
    })

    describe('given a success request', () => {
        it('should: delete + status 200', async () => {
            const id = toDo.data.data._id
            const toDoURL = `${url}/${id}`
            const resp = await reqJest(toDoURL, 'delete')

            expect(resp.status).toBe(200)
            expect(resp.data.ok).toBe(true)
            expect(resp.data.message).toBe(scssDBMsgs.del)
        })
    })
})
