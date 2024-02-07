import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./reproducir.css";

function Reproducir() {
  const { id } = useParams(); // Obtén el ID de la canción de la URL
  const [canciones, setCancion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/canciones/${id}`
        );
        setCancion(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {canciones ? (
        <article className="flex mt-36 justify-center">
          <div>
            <img
              src={canciones.archivo_img}
              alt="archivo_img"
              className="w-96 h-auto max-w-full rounded-lg"
            />
            {/* <h1 className="font-bold text-2xl "> {canciones.titulo}</h1> */}
            <audio controls autoPlay className="w-96">
              <source src={canciones.archivo_mp3} type="audio/mpeg" />
            </audio>
          </div>
          <div>
            <h1>Otras canciones</h1>
          </div>
        </article>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-bold text-2xl">Cargando...</h1>
        </div>
      )}
    </div>
  );
}

export default Reproducir;
