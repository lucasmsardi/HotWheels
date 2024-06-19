import styles from "./CarsList.module.css";
import { getCarsData, deleteCarData, putCarsData } from "../../service";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function CarsList() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      const carData = await getCarsData(); 

      if (carData) {
        setCars(carData); 
      }
    };

    fetchCars();
  }, []);

  return (
    <div className={styles.box}>
      <h1>Lista de Carros</h1>
      <ul>
        {cars.length === 0 ? (
          <p>Lista de carros vazia.</p>
        ) : (
          cars.map((car) => (
            <li key={car.id}>
              {car.name}{" "}
              <button
                className={styles.botoes}
                onClick={() => {
                  deleteCarData(car);
                }}
              >
                Excluir
              </button>
              
              <button
                className={styles.botoes}
                onClick={() => navigate('/editar-carro', { state: { car } })}
              >
                Editar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default CarsList;
