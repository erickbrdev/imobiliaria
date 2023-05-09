import { Link } from "react-router-dom";
import { IProperty } from "../interfaces/Property";

export default function Card(props: IProperty) {
  const { id, type, state, city, place, image, description, price } = props;
  return (
    <Link
      to={`imoveis/${id}`}
      className="rounded-lg w-80 h-[35rem] flex flex-col items-center border-2 border-red-900 p-1 font-serif text-lg"
    >
      <img src={image} alt={type} className="mb-5 w-full h-72 rounded-lg shadow-xl" />

      <div className="flex flex-col gap-1 w-full">
        <p>{state}</p>
        <p>{`${city} - ${place}`}</p>
        <p className="w-72 overflow-hidden h-24 text-[1rem]">{description}</p>
        <p>{`Tipo: ${type}`}</p>
      </div>

      <div className="flex flex-col gap-1 items-start w-full mt-1">
        <p>{`Investimento:  R$${price.toFixed(3)}`}</p>
      </div>
    </Link>
  );
}
