import { Link } from "react-router-dom";
import Casa from "../assets/Casa.jpeg";
import Apartamento from "../assets/Apartamento.jpeg";
import { Paperclip } from "@phosphor-icons/react";

export default function Newsletter() {
  return (
    <section className="flex flex-col items-center bg-red-300">
      <div className="flex flex-col items-center justify-center font-serif text-2xl text-red-950 mb-3 gap-5">
        <p className="border-b-2 border-red-950 w-72 text-center flex items-center gap-2">
          <Paperclip size={30} weight="fill" /> Posts em destaque
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly items-center w-full gap-10 mb-5">
        <Link to="/" className="bg-red-200 rounded-lg p-2">
          <img
            className="sm:w-[30rem] rounded-lg"
            src={Casa}
            alt="Nosso escritorio físico"
          />

          <p className="font-serif text-lg text-red-950 font-bold">
            Venha nos conhecer!
          </p>
          <p className="sm:w-[30rem] font-serif ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa
            quaerat est rem ratione deleniti ad quidem libero! Illo, neque! Illo
            illum animi quos? Magnam dicta possimus error quisquam quo.
          </p>
        </Link>
        <Link to="/blog" className="bg-red-200 rounded-lg p-2">
          {" "}
          <img
            className="sm:w-[30rem] rounded-lg"
            src={Apartamento}
            alt="Blog"
          />
          <p className="font-serif text-lg text-red-950 font-bold ">
            Como escolher seu apartamento ideal!!
          </p>
          <p className="sm:w-[30rem] font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa
            quaerat est rem ratione deleniti ad quidem libero! Illo, neque! Illo
            illum animi quos? Magnam dicta possimus error quisquam quo.
          </p>
        </Link>
      </div>
    </section>
  );
}
