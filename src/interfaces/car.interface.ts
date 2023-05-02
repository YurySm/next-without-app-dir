export interface ICar {
    id: string
    name: string
    price: number
    image: string
}
export interface ICarData {
    cars: ICar[]
}
export interface ICarDataSingle {
    car: ICar
}