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
    <div>
      <article className="mt-32">
        <h1 className="text-2xl font-bold justify-center flex">Musica</h1>
        <div className="mt-6 ml-24 grid grid-cols-4 md:grid-cols-3 gap-6">
          {cancion.map((canciones, index) => {
            return (
              <div
                key={index}
                className="hover:scale-105 transform transition duration-300 ease-in-out"
              >
                <Link to={`/reproducir/${canciones.id}`}>
                  <img
                    src={canciones.archivo_img}
                    className="h-auto max-w-full rounded-lg "
                  />
                  <h3 className="flex justify-center font-bold text-2xl">
                    {canciones.titulo}
                  </h3>
                </Link>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
}

export default Musica;
