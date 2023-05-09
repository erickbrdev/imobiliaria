import Casa from "../assets/Casa-H.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Blog() {
  return (
    <section className="flex bg-red-300 min-h-screen items-center gap-2 flex-wrap">
      <div className="flex flex-col gap-5 font-serif text-lg">
        <Header />
       <div className="p-2 flex flex-col gap-8">
       <img
          src={Casa}
          className=" rounded-xl border-2 border-red-950 md:w-[90rem] md:h-[35rem]"
        />
        <p className="border-b-2">
          Defina o seu orçamento: Antes de começar a procurar apartamentos,
          defina o seu orçamento. Considere o quanto você pode pagar por mês,
          levando em conta as suas outras despesas.
        </p>
        <p className="border-b-2">
          Escolha uma boa localização: Escolha uma localização que atenda às
          suas necessidades. Leve em consideração a proximidade de transporte
          público, comércio, escolas, trabalho, entre outros.
        </p>
        <p className="border-b-2">
          Verifique as condições do apartamento: Antes de alugar um apartamento,
          certifique-se de que ele está em boas condições. Verifique se há
          infiltrações, vazamentos, problemas com o encanamento, a fiação
          elétrica, a pintura, entre outros.
        </p>
        <p className="border-b-2">
          Conheça as regras do condomínio: Se o apartamento está em um
          condomínio, conheça as regras do condomínio. Veja se as regras atendem
          às suas necessidades e se você concorda com elas.
        </p>
        <p className="border-b-2">
          Converse com os vizinhos: Se possível, converse com os vizinhos para
          saber mais sobre o local. Pergunte sobre a segurança, o barulho, a
          limpeza, entre outros.
        </p>
        <p className="border-b-2">
          Verifique as opções de lazer: Se o apartamento oferecer opções de
          lazer, verifique se elas atendem às suas necessidades e se estão em
          boas condições.
        </p>
        <p className="border-b-2">
          Analise o contrato: Antes de assinar o contrato de aluguel, leia
          atentamente todas as cláusulas. Veja se as condições do contrato
          atendem às suas necessidades e se você concorda com elas.
        </p>
        <p className="border-b-2">
          Lembre-se de que alugar um apartamento requer uma decisão cuidadosa e
          é importante escolher um lugar que atenda às suas necessidades e que
          você se sinta confortável em viver. Boa sorte na sua busca pelo
          apartamento ideal!
        </p>
       </div>
        <Footer />
      </div>
    </section>
  );
}
