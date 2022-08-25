import React, { FC } from 'react'
import { LayoutPage } from '../layout/LayoutPage'
import { Person } from '../person/Person'
import { peopleDB } from '../../database/persons';
import { Table } from 'react-bootstrap';


export const Home: FC= () => {

    return (
        <LayoutPage titleHead="App Challenge | Inicio">
            <div className='container p-3'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Carrera</th>
                            <th>Hobbie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            peopleDB.map( (person, idx) => (
                                <Person key={ idx + 1 } idx={ idx } {...person}/>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </LayoutPage>
    )
}
