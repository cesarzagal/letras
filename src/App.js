import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Info from "./components/Info";
import axios from 'axios';

function App() {
    const [busquedaletra, guardarBusquedaletra] = useState({});
    const [letra, guardarLetra] = useState('');
    const [informacion, guardarInformacion] = useState({});
    useEffect( () => {
        if(Object.keys(busquedaletra).length===0){
            return;
        }
        
        const consultarAPILetra = async()=>{
            const {artista, cancion} = busquedaletra;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
            const [letra, informacion] = await Promise.all([
                axios(url), axios(url2)
            ])


            guardarLetra(letra.data.lyrics);
            guardarInformacion(informacion.data.artists[0]);
        }
        consultarAPILetra();

    },[busquedaletra]);

    return (
        <Fragment>
            <Formulario
                guardarBusquedaletra={guardarBusquedaletra}>
            </Formulario>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Info
                            info={informacion}
                        />
                    </div>
                    <div className="col-md-6">
                        <Cancion
                            letra={letra}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
