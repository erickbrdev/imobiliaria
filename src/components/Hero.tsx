import "../styles/hero.css";
import TextWrite from "./TextWrite";

export default function Hero() {
  return (
    <section className="hero-section h-[30rem] w-full laptop:bg-full flex items-center justify-center">
      <h1 className="font-serif text-[1.4rem] sm:text-4xl laptop:text-5xl text-red-950">
        <TextWrite text="Aqui seus sonhos ganham um novo lar!"/>
      </h1>
    </section>
  );
}
