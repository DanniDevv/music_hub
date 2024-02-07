import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Musica() {
  const [cancion, setCanciones] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/canciones/").then((res) => {
      console.log(res.data);
      setCanciones(res.data);
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 my-32">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {cancion.map((canciones, index) => {
            return (
              <div
                key={index}
                className="flex w-1/3 flex-wrap hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <div className="w-full p-1 md:p-2">
                  <Link to={`/reproducir/${canciones.id}`}>
                    <img
                      src={canciones.archivo_img}
                      alt="canciones"
                      className="block h-full w-full rounded-lg object-cover object-center"
                    />
                    <h3 className="text-center mt-2">{canciones.titulo}</h3>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Musica;
