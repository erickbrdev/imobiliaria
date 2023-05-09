import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 p-3 bg-red-500">
      <nav className="flex items-center gap-4 justify-center sm:justify-evenly">
        <nav className="flex gap-5">
          <a href="https://pt-br.facebook.com/" target="_blank">
            <FacebookLogo
              className="hover:bg-red-900 hover:p-1 rounded-full"
              size={40}
              color="#fff"
              weight="fill"
            />
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <InstagramLogo
              className="hover:bg-red-900 hover:p-1 rounded-full"
              size={40}
              color="#fff"
              weight="fill"
            />
          </a>

          <a href="https://br.linkedin.com/" target="_blank">
            <LinkedinLogo
              className="hover:bg-red-900 hover:p-1 rounded-full"
              size={40}
              color="#fff"
              weight="fill"
            />
          </a>

          <a href="https://www.youtube.com/" target="_blank">
            <YoutubeLogo
              className="hover:bg-red-900 hover:p-1 rounded-full"
              size={40}
              color="#fff"
              weight="fill"
            />
          </a>
        </nav>
        <nav className="flex flex-col gap-1 ml-5 sm:gap-3">
          <Link className="font-serif text-white border-b-2 text-lg" to="/">
            Inicio
          </Link>
          <Link
            className="font-serif text-white border-b-2 text-lg"
            to="/imoveis"
          >
            Imoveis
          </Link>
          <Link className="font-serif text-white border-b-2 text-lg" to="/blog">
            Blog
          </Link>
          <Link
            className="font-serif text-white border-b-2 text-lg"
            to="/contato"
          >
            Contato
          </Link>
        </nav>
      </nav>

      <div className="flex items-center gap-1 justify-center bg-red-600 p-1">
        <Copyright size={30} color="#fff" />
        <p className="text-lg text-white font-serif">
          Todos direitos reservados - Imobiliaria
        </p>
      </div>
    </footer>
  );
}
