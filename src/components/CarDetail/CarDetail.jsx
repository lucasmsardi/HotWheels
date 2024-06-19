import React, { useState } from 'react';
import CarForm from '../CarForm/CarForm.jsx';
import CarsList from '../CarsList/CarsList.jsx';

function CarDetail(props) {
    const [cars, setCars] = useState();

    const handleSubmit = (carData) => {
        setCars((prevCars) => [...prevCars, carData]);
    };

    const renderPage = () => {
        switch (props.currentPage) {
            case 'CarForm':
                return <CarForm onSubmit={handleSubmit} />
            case 'CarsList':
                return <CarsList cars={cars}/>
        }

    }
    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default CarDetail;