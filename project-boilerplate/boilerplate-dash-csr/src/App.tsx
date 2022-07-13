import axios from 'axios'
import { SimpleTodoList } from '../app'
import { response } from 'helpers-front'
import { Title, Error, Li } from 'lib-main'
import { useEffect, useState } from 'react'

const App = () => {
    const data = useState({})

    const getData = async () => {
        const url = 'http://localhost:5000/api'
        const uri = `${url}/simple-todo`
        const { data } = await axios.get(uri)
        const successRes = response(true, data.message, data.data)
        console.log(successRes)
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Title>All Simple ToDo</Title>
        </div>
    )
}

export default App
