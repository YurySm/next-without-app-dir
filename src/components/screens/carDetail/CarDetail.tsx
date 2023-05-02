import React, {FC} from 'react';
import {ICarDataSingle} from "@/interfaces/car.interface";
import Layout from "@/components/screens/layout/Layout";
import CarItem from "@/components/UI/car/CarItem";

const CarDetail : FC<ICarDataSingle>= ({car}) => {
    return (
        <Layout title={car.name} description={car.name}>
            <CarItem car={car}/>
        </Layout>
    );
};

export default CarDetail;
