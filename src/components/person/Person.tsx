import React, { FC } from 'react'
import { IPerson } from '../../../interface/person';

interface Props extends IPerson{
    idx: number;
}

export const Person: FC<Props> = ({ carrera, edad, hobbie, idx, nombre }) => {
    
    return (
        <tr>
            <td>{ idx }</td>
            <td>{ nombre }</td>
            <td>{ edad }</td>
            <td>{ carrera }</td>
            <td>{ hobbie }</td>
        </tr>
    )
}
