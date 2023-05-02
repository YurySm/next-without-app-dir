import Layout from "@/components/screens/layout/Layout";
import {ICarData} from "@/interfaces/car.interface";
import {FC} from "react";
import CarItem from "@/components/UI/car/CarItem";

const Home: FC<ICarData> = ({cars}) => {
    return (
        <Layout title={'Home page'} description={"We love our customer and sale cars"}>
            <h1>Hello world!</h1>
            {
                cars?.length ?
                    cars.map(car => <CarItem key={car.id} car={car}/>)
                    :
                    <div>Cars not found!</div>
            }
        </Layout>
    );
};

export default Home;
