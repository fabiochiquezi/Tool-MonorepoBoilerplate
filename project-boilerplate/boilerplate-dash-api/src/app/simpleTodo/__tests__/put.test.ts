import { errMessages } from '../../share'
import { reqJest, testURL } from '../../../helpers/test'

describe('PUT /simpleTodo:id', () => {
    const url = `${testURL}/simple-todo`
    let toDo: any

    beforeAll(async () => {
        const data = { content: 'test' }
        toDo = await reqJest(url, 'post', data)
    })

    describe('given a error or mistake', () => {
        it('as miss required data¹', async () => {
            expect.assertions(3)
            try {
                const data = {}
                await reqJest(url, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss required data²', async () => {
            expect.assertions(3)
            try {
                const data = { name: 'test', conten: 'test' }
                await reqJest(url, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss required data³', async () => {
            expect.assertions(3)
            try {
                const data = { content: '' }
                await reqJest(url, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as wrong type date', async () => {
            expect.assertions(3)
            try {
                const data = { content: 222 }
                await reqJest(url, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss data on the database', async () => {
            /*
            try {
                await reqJest(`${url}/000`, 'put')
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.database.docNotFound)
            }
            */
        })

        it('as a problem in the database', async () => {})
    })

    describe('given a success request', () => {
        it('should: delete + status 200', async () => {
            /*
            const id = toDo.data.data._id
            const toDoURL = `${url}/${id}`
            const resp = await reqJest(toDoURL, 'delete')

            expect(resp.status).toBe(200)
            expect(resp.data.ok).toBe(true)
            expect(resp.data.message).toBe(successMessage.del)
            */
        })
    })

    afterAll(async () => {
        await reqJest(`${url}/${toDo.data.data._id}`, 'delete')
    })
})
