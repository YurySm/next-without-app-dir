import React from 'react';
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {useRouter} from "next/router";
import CarDetail from "@/components/screens/carDetail/CarDetail";
import {ICarData, ICarDataSingle} from "@/interfaces/car.interface";
import {CarService} from "@/services/car.service";
import {ParsedUrlQuery} from "querystring";

const CarDetailPage: NextPage<ICarDataSingle> = ({car}) => {
    const {asPath, pathname} = useRouter()
    console.log(asPath, pathname)  //  /car/1 /car/[id]

    return (
        <CarDetail car={car}/>
    );
};

interface IParams extends ParsedUrlQuery{
    id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
    const cars = await CarService.getAll()
    return {
        paths: cars.map(car => ({
            params: {
                id: car.id.toString()
            }
        })),
        // if page not found - search in server
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({params}) => {
    // console.log(params.id)
    const car = await CarService.getById(String(params?.id))

    return {
        props: {car},
        revalidate: 60
    }
}

export default CarDetailPage
