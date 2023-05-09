import { Link } from "react-router-dom";
import { imoveis } from "../data/imoveis";
import Card from "./Card";
import { House } from "@phosphor-icons/react";

export default function ListPropertys() {
  return (
    <section className="p-3 bg-red-200">
      <div className="flex flex-col items-center justify-center font-serif text-2xl text-red-950 mb-3 gap-5">
        <Link
          to="/imoveis"
          className="border-b-2 border-red-950 w-72 text-center"
        >
          Dê moradia ao seu sonho!
        </Link>

        <Link to="/imoveis">
          <button className="delay-100 flex items-center gap-1 border-4 border-red-950 p-1 rounded-xl hover:bg-red-950 hover:text-white hover:border-red-900">
            Veja mais imoveis <House size={30} color="#fff" weight="fill" className="p-1 rounded-full bg-red-950 hover:bg-red-900"/>
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-evenly gap-2">
        {imoveis.slice(0, 8).map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              type={item.type}
              state={item.state}
              city={item.city}
              place={item.place}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
