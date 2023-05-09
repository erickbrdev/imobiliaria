import { useState } from "react";
import { imoveis } from "../data/imoveis";
import { Link } from "react-router-dom";

export default function Filter() {
  const [filterByType, setFilterByType] = useState("Todos");

  const filterProperty = imoveis.filter((property) => {
    if (filterByType === "Todos") {
      return true;
    } else {
      return property.type === filterByType;
    }
  });

  return (
    <main className="flex flex-col">
      <section className="flex flex-col shadow-sm gap-1  bg-red-900 p-2">
        <section>
          <select
            value={filterByType}
            onChange={(e) => setFilterByType(e.target.value)}
            name="select"
            className="w-[15rem] border-2 border-black p-1 rounded-md placeholder:text-black placeholder:opacity-80"
          >
            <option value="Todos">Todos</option>
            <option value="Casa">Casa</option>          
            <option value="Terreno">Terreno</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Predio">Predio</option>
          </select>
        </section>
      </section>
      <div className="flex flex-wrap gap-5 px-1 py-5 bg-red-300 items-center justify-center">
        {filterProperty.map((property) => {
          return (
            <div
              key={property.id}
              className="rounded-lg w-80 h-[35rem] flex flex-col items-center border-2 border-red-900 p-1 font-serif text-lg"
            >
              <Link to={`/imoveis/${property.id}`}>
                <img
                  src={property.image}
                  alt={property.description}
                  className="mb-5 w-full h-72 rounded-lg shadow-xl"
                />

                <div className="font-serif text-lg">
                  <p className="font-semibold">{property.state}</p>
                  <p className="font-semibold">{property.city} - {property.place}</p>                 
                  <p className="w-72 overflow-hidden h-24 text-[1rem]">
                    {property.description}
                  </p>
                  <p>{property.type}</p>
                  <p>{`Investimento: R$${property.price.toFixed(3)}`}</p>
                </div>
              </Link>
            </div>
          )
        })}  
      </div>  
    </main>
  );
}
