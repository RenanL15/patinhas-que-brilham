import Image from "next/image";
import ImagemTexto from "@/assets/images/pqb-texto.jpg";

import { Galada } from "next/font/google";
const fontGalada = Galada({ weight: "400", subsets: ["latin"] });

export default function Sobre() {
  return (
    <section className="max-w-[65rem]">
      <h1
        className={`${fontGalada.className} text-center text-4xl mb-12 text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
        Sobre nós
      </h1>
      <Image
        src={ImagemTexto}
        alt="Banner da ONG Patinhas Que Brilham"
        className="rounded-xl float-left mr-6"
        width={400}
      />
      <h2
        className={`${fontGalada.className} text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
        A nossa missão
      </h2>
      <p className="leading-10 text-justify mt-2">
        <span className="ml-12"></span> A ONG "Patinhas que Brilham", situada na
        cidade de Santos, é uma entidade que se iniciou em 2005 e desde então é
        dedicada a transformar a vida de diversos animais. Na ONG é oferecido um
        lar temporário para animais necessitados enquanto trabalha
        incansavelmente para encontrar famílias amorosas e permanentes para
        eles. A nossa missão é proporcionar uma vida melhor para animais
        abandonados, oferecendo cuidados médicos, alimentação e muito carinho.
        Além de promover a adoção responsável, a ONG também facilita doações
        financeiras e de suprimentos, garantindo que todos os animais recebam a
        atenção necessária. Com isso, o nosso público-alvo são pessoas que amam
        os animais e que possam oferecer um lar amoroso e cuidadoso para o novo
        integrante da família, como por exemplo, famílias grandes, as quais
        podem proporcionar um ambiente vibrante e cheio de atividades para os
        animais.
      </p>
      <p className="leading-10 text-justify mt-2">
        <span className="ml-12 "></span> Como Ajudar? Por sermos uma entidade
        independente estamos sempre em busca de pessoas com o mesmo objetivo que
        o nosso, ajudar e amar os animais, por isso existem várias maneiras que
        você pode apoiar "Patinhas que Brilham":
      </p>
      <ul className="list-disc ml-16">
        <li className="leading-10 text-justify mt-2">
          Doações Financeiras: Contribuições monetárias ajudam a cobrir custos
          com alimentação, cuidados médicos e manutenção das instalações.
        </li>
        <li className="leading-10 text-justify mt-2">
          Doações de Suprimentos: Rações, brinquedos, medicamentos e outros
          itens são sempre bem-vindos.
        </li>
        <li className="leading-10 text-justify mt-2">
          Voluntariado: Oferecer seu tempo para ajudar nas atividades diárias da
          ONG é uma forma valiosa de contribuição.
        </li>
        <li className="leading-10 text-justify mt-2">
          Adoção: e claro, a Adoção responsável para dar um lar permanente e
          adequado aos animais.
        </li>
      </ul>
      <p className="leading-10 text-justify mt-2">
        <span className="ml-12 "></span> Nosso infográfico destaca a quantidade
        de animais adotados e comprados no Brasil, como também mostra dados e
        benefícios da adoção ao invés da compra de animais.
      </p>
      <p className="leading-10 text-justify mt-2">
        <span className="ml-12 "></span> Aqui no site também é possível
        encontrar um vídeo criado por voluntários mostrando quais são os pré
        requisitos da adoção responsável, há dicas e informações relevantes
        antes de adotar seu pet, não deixe de conferir!
      </p>
      <p className="leading-10 text-justify mt-2">
        <span className="ml-12 "></span> Por fim, adotar e cuidar de um animal é
        um ato de amor que transforma vidas e por isso convidamos você a
        conhecer o espaço da nossa ONG "Patinhas que Brilham" e fazer parte
        dessa missão!
      </p>
    </section>
  );
}
