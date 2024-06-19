import axios from 'axios';

export async function getCarsData() {
  try {
    const carData = await axios.get('http://localhost:5000/cars');
    return carData.data;
  } catch (error) {
    console.error(error);
  }
}

export async function postCarsData(car) {
  try {
    await axios.post('http://localhost:5000/cars', car);
  } catch (error) {
    console.error(error);
  }
}

export async function putCarsData(car) {
  try {
    await axios.put(`http://localhost:5000/cars`, car);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCarData(car) {
  try {
    const carData = await axios.delete(`http://localhost:5000/cars?id=${car.id}`);
  } catch (error) {
    console.error(error);
  }
}
