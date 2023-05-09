import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().nonempty("Informe seu nome").min(2),
  email: z
    .string()
    .email("Digite um email válido")
    .nonempty("Por favor, digite um email válido")
    .toLowerCase(),
  message: z.string().nonempty("Digite sua mensagem").min(5),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Form() {
  const [output, setOutput] = useState("");

  useEffect(() => {
    console.log(output)
  }, [output])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  function createUser(data: ContactForm) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-red-300">
      <h1 className="text-2xl border-b-2 border-red-950 mb-5 font-mono">
        Envie sua mensagem!
      </h1>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col font-serif text-lg gap-3"
      >
        <div className="flex flex-col">
          <label htmlFor="name">
            <p>Nome</p>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-72 border-red-950 border-2 rounded-lg shadow-xl p-1"
            />
          </label>
          {errors.name && (
            <span className="text-red-900 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">
            <p>E-mail</p>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="w-72 border-red-950 border-2 rounded-lg shadow-xl p-1"
            />
          </label>
          {errors.email && (
            <span className="text-red-900 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">
            <p>Mensagem</p>
            <textarea
              cols={30}
              rows={5}
              className="border-2 border-red-950 rounded-lg shadow-2xl"
              id="message"
              {...register("message")}
            />
          </label>
          {errors.message && (
            <span className="text-red-900 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="flex gap-2 justify-evenly">
          <button
            type="submit"
            className="border-2 border-red-950 p-2 rounded-xl font-semibold w-32"
          >
            Enviar
          </button>
          <Link
            to="/"
            type="submit"
            className="border-2 border-red-950 p-2 rounded-xl font-semibold w-32 text-center"
          >
            Voltar
          </Link>
        </div>
      </form>
    </section>
  );
}
