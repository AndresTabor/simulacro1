import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { endPoint } from '../helpers/enpoint';
import {uploadImage} from '../helpers/uploadImage'
import axios from 'axios';



const RegistroCar = () => {
    const [registro, setRegistro] = useState({

        "id": '',
        "marca": '',
        "modelo": '',
        "estado": '',
        "precio": '',
        "ubicacion": '',
        "imagen": ''
    })

    const {marca,modelo,estado,precio,ubicacion,imagen} = registro;

    const postData = () => {
        axios.post(endPoint,registro)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
        
    }


   const handleChanged = ({target}) => {
    setRegistro({
      ...registro,
      [target.name]: target.value
    })

    }
  const handleSubmit = (e) => {
    e.preventDefault();
   }

   const handleFileChange = (e) => {
        const file = e.target.files[0];
        uploadImage(file)
        .then(response => {
            registro.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }



    return (
        <div>
            <h1>Registre su Vehiculo</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Marca del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Mazda-Chevrolet-etc" onChange={handleChanged} 
                name="marca" value={marca} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Modelo del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Aveo GT 2021" onChange={handleChanged}
                name="modelo" value={modelo}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Precio del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: 15.000.000" onChange={handleChanged}
                name="precio" value={precio}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ubicacion del Vehiculo</Form.Label>
                <Form.Control type="text" placeholder="Ej: Medellín" onChange={handleChanged}
                name="ubicacion" value={ubicacion}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Select aria-label="Default select example" onChange={handleChanged}
                name="estado" value={estado}>
                    <option>Estado de tu Vehiculo</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Usado">Usado</option>
                    
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Fotografia del Vehiculo</Form.Label>
                <Form.Control type="file" onChange={handleFileChange}
                name="imagen" value={imagen}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => postData()}>
                Enviar registro
            </Button>
            </Form>
           
        </div>
    )
}

export default RegistroCar
