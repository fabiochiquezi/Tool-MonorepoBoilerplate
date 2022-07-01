import { FC } from 'react'
import { SimpleTodoListT } from './types'

const SimpleTodoList: FC<SimpleTodoListT> = ({ list, Li }) => {
    const isEmpty = list.length === 0

    const Empty = () => (
        <p className="mt-16 text-center w-100 text-lg text-blue-400 font-bold">
            The list is empty
        </p>
    )

    const List = () => (
        <ul className="mt-24 flex flex-wrap">
            {list.map(item => (
                <Li key={item._id as string} id={item._id as string}>
                    {item.content}
                </Li>
            ))}
        </ul>
    )

    return isEmpty ? <Empty /> : <List />
}

export { SimpleTodoList }
