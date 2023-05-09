import {  
  Clock,
  House,
  MapPinLine,
  Phone,
} from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section className="flex flex-col gap-5 p-3 bg-red-300">
      <div>
        <p className="flex items-center gap-1 text-2xl font-serif border-b-4 border-black w-72">
          Imobiliaria <House size={30} color="black" />
        </p>
      </div>

      <div>
        <p className="flex items-center gap-1 text-xl font-serif border-b-2 border-black w-72">
          Endereço <MapPinLine size={30} color="black" />
        </p>

        <div className="flex flex-col mt-1 font-mono">
          <p>Konoha - RJ</p>
          <p>Rua Konoha XX, 00, Centro</p>
          <p>Ao lado do Vale do Fim</p>
          <p>76808-238</p>
        </div>
      </div>

      <div>
        <p className="flex items-center gap-1 text-xl font-serif border-b-2 border-black w-72">
          Horário de atendimento <Clock size={30} color="black" />
        </p>

        <div className="flex flex-col mt-1 font-mono">
          <p>De segunda a sexta-feira: de 09h às 17h</p>
        </div>
      </div>

      <div>
        <p className="flex items-center gap-1 text-xl font-serif border-b-2 border-black w-72">
          Telefones <Phone size={30} color="black" />
        </p>

        <div className="flex flex-col mt-1 font-mono">
          <p>(00)4002-8922</p>
          <p>(00)4002-8922</p>
          <p>(00)4002-8922</p>
        </div>
      </div>
    </section>
  );
}
