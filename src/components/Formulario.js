import React, { useState } from 'react';
const Formulario = ({guardarBusquedaletra}) => {
    const [busqueda, guardarBusqueda] = useState({
        artista:'',
        cancion:''
    });

    const [error, guardarError] = useState(false);

    const actualizaState = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const {artista, cancion} = busqueda;

    const buscarInformacion = e => {
        e.preventDefault();
        if(artista.trim()==="" || cancion.trim()===""){
            guardarError(true);
            return;
        } 
        guardarError(false);
        guardarBusquedaletra(busqueda);
    }
    return ( 
    <div className="bg-info">
        {error ? <p className="alert alert-danger text-center p-2">Todos los Campos son Obligatorios</p> : null}
                
        <div className="container">
            <div className="row">
                <form
                    onSubmit={buscarInformacion}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                >
                    <fieldset>
                        <legend className="text-center">Buscador Letras Canciones
                        </legend>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="formgroup">
                                    <label>Artista</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre Artista"
                                        onChange={actualizaState}
                                        value={artista}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="formgroup">
                                    <label>Canción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        onChange={actualizaState}
                                        value={cancion}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary float-right"
                        >Buscar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div> );
}
 
export default Formulario;