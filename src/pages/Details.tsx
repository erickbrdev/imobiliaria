import { Link, useParams } from "react-router-dom";
import { imoveis } from "../data/imoveis";
import { IProperty } from "../interfaces/Property";

export default function Details() {
  const { id } = useParams();

  const detailsProperty: IProperty | undefined = imoveis.find((property) => {
    return property.id === id;
  });

  return (
    <section className="min-h-screen flex items-center justify-center bg-red-300 p-5 flex-col">
      {!detailsProperty ? (
        <p>Loading</p>
      ) : (
        <div className="flex flex-col border-4 border-red-950 p-2 rounded-xl">
          <img
            src={detailsProperty.image}
            alt={detailsProperty.description}
            className="w-96 rounded-xl border-2 border-red-950"
          />

          <div className="flex flex-col gap-1 w-full font-serif text-lg">
            <p className="font-semibold">{detailsProperty.state}</p>
            <p className="font-semibold">{`${detailsProperty.city} - ${detailsProperty.place}`}</p>
            <p className="w-72 overflow-hidden text-[1rem]">
              {detailsProperty.description}
            </p>
            <p>{`Tipo: ${detailsProperty.type}`}</p>
          </div>

          <div className="flex flex-col gap-1 items-start w-full mt-1">
            <p>{`Investimento: R$${detailsProperty.price.toFixed(3)}`}</p>
          </div>
        </div>
      )}
      <Link
        to="/imoveis"
        className="border-2 border-red-950 p-2 w-44 text-center rounded-xl font-serif font-semibold text-lg mt-5 delay-100 hover:bg-red-500 hover:text-white"
      >
        Voltar
      </Link>
    </section>
  );
}
