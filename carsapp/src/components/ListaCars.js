import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import {endPoint} from '../helpers/enpoint'
//import Cards from './Cards'

const ContainerList = styled.div`
    display:flex;
    flex-direction: row;

`

const ListaCars = () => {

    const [car, setCar] = useState([])
    

    const optenerRegistro = () => {
        axios.get(endPoint)
        .then(Response =>{
            setCar(Response.data);
            //console.log(car);
        })
    }

    useEffect(() => {
        optenerRegistro()
    }, [car])

    const eliminarRegistro = (id) =>{
        console.log(endPoint + id);
        axios.delete(endPoint + id)
        .then(Response =>{
            optenerRegistro()
        })
        .catch(error => {
            console.log(error);
        })
       
    }

    return (
        <ContainerList>
            {
                car.map(carro =>(
                    <Card style={{ width: '18rem' }} className="mx-3">
                    <Card.Img variant="top" src={carro.imagen} />
                        <Card.Body>
                            <Card.Title>{carro.marca} {carro.modelo}</Card.Title>
                            <Card.Text>{carro.estado}</Card.Text>
                            <Card.Text>$ {carro.precio}</Card.Text>
                            <Card.Text>{carro.ubicacion}</Card.Text>
                            <Button variant="primary" onClick={() => eliminarRegistro(carro.id)}>Eliminar Publicacion</Button>
                        </Card.Body>
                    </Card>
                ))

            }
           
        </ContainerList>
    )
}

export default ListaCars
