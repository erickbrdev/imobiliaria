import { Link } from "react-router-dom";
import Logo from "../assets/LogoEmpresarial.jpeg";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="border-t-2 border-red-900 flex-col items-center gap-3 flex bg-red-500 min-h-[2rem] sm:justify-evenly p-2 sm:flex-row">
      <div>
        <img src={Logo} alt="Identidade visual" className="w-16 sm:w-24 rounded-full border-red-950 border-2" />
      </div>

      <nav className="flex items-center gap-4">
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

      <nav className="flex items-center gap-4">
        <Link
          className="font-serif text-xl text-white border-b-2 hover:text-red-950 hover:border-red-900"
          to="/"
        >
          Inicio
        </Link>

        <Link
          className="font-serif text-xl text-white border-b-2 hover:text-red-950 hover:border-red-900"
          to="/imoveis"
        >
          Imoveis
        </Link>

        <Link
          className="font-serif text-xl text-white border-b-2 hover:text-red-950 hover:border-red-900"
          to="/blog"
        >
          Blog
        </Link>

        <Link
          className="font-serif text-xl text-white border-b-2 hover:text-red-950 hover:border-red-900"
          to="/contato"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
