import React from 'react'
import { LiT } from 'types'
import { simpleToDoDomainT } from '../types'

export type SimpleTodoListT = {
    list: simpleToDoDomainT[]
    Li: React.FC<LiT>
}
