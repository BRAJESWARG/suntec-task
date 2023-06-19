import React from 'react'
import { Table } from 'react-bootstrap';
import FemaleImgOne from './img/female.jpg';

const TableBody = () => {
    return (
        <div className='Table-body'>
            <div className='body-header' >
                <span>Name</span>
                <span>Some</span>
                <span>Some</span>
                <span>Some</span>
                <span>Some</span>
                <span>Some</span>
                <span>Some</span>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='table-head'>WOMEN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={FemaleImgOne} alt='tableImg1' className='image-table' />
                        </td>
                        <td>First Last Name</td>
                        <td>td</td>
                        <td>td</td>
                        <td>td</td>


                    </tr>
                    <tr>
                        <td>
                            <img src={FemaleImgOne} alt='tableImg1' className='image-table' />
                        </td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={FemaleImgOne} alt='tableImg1' className='image-table' />
                        </td>
                        <td>Larry the Bird</td>
                        <td>td</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th className='table-head'>MEN</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className='table-head'>STUDENTS</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th className='table-head'>FAMILIES</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

export default TableBody;