import Image from "next/image";
import PQBBanner from "@/assets/images/anuncioPatinhasqBrilham.png";
import CatGif from "@/assets/images/lovely-cat.gif";
import CatHeart from "@/assets/images/cat-heart.gif";
import CatPlaying from "@/assets/images/cat-playing.gif";
import Lula from "@/assets/images/billy.jpg";
import Janja from "@/assets/images/janja.jpg";

// Photos
import BrunaPic from "@/assets/images/photos/bruna.png";
import JuliaPic from "@/assets/images/photos/julia.png";
import IsabellePic from "@/assets/images/photos/isabelle.png";
import RenanPic from "@/assets/images/photos/renan.png";
import GiovannaPic from "@/assets/images/photos/giovanna.jpg";
import DaviPic from "@/assets/images/photos/davi.png";

import { Galada } from "next/font/google";

// Icons
import DogFoodIcon from "@/assets/images/icons/dog-food-icon.webp";
import DotsIcon from "@/assets/images/icons/dots-icon.webp";
import InstaIcon from "@/assets/images/icons/insta-icon.webp";
import PawIcon from "@/assets/images/icons/paw-icon.webp";
import PixIcon from "@/assets/images/icons/pix-icon.webp";
import RemedyIcon from "@/assets/images/icons/remedy-icon.webp";
import SoapIcon from "@/assets/images/icons/soap-icon.webp";
import TowelIcon from "@/assets/images/icons/towel-icon.webp";

const fontGalada = Galada({ weight: "400", subsets: ["latin"] });

const pets = [
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
  {
    name: "Lula",
    age: "53 anos",
    cast: "Castrado",
    image: Lula,
  },
];

const adoptedPets = [
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
  {
    name: "Janja",
    age: "69 anos",
    cast: "Não castrado",
    image: Janja,
  },
];

const team = [
  {
    name: "Bruna de Araujo",
    role: "Designer",
    image: BrunaPic,
  },
  {
    name: "Isabelle Maluza",
    role: "Designer",
    image: IsabellePic,
  },
  {
    name: "Julia Rodrigues",
    role: "Designer",
    image: JuliaPic,
  },
  {
    name: "Giovanna Melgares",
    role: "Designer",
    image: GiovannaPic,
  },
  {
    name: "Renan Almeida",
    role: "Designer",
    image: RenanPic,
  },
  {
    name: "Davi Pimentel",
    role: "Designer",
    image: DaviPic,
  },
];

export default function Home() {
  return (
    <>
      <h1
        className={`${fontGalada.className} text-4xl text-center text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
        ONG - Patinhas que brilham
      </h1>
      <Image
        src={PQBBanner}
        alt="Banner da ONG Patinhas Que Brilham"
        className="rounded-xl"
      />
      <div id="sobre"></div>
      <section className="relative max-w-[50rem] mt-20 border border-primary border-opacity-60 rounded-xl p-10 z-10">
        <h2
          className={`${fontGalada.className} absolute -top-4 left-auto bg-white px-4 text-4xl text-primary`}>
          Sobre
        </h2>
        <p className="leading-10 mt-4">
          Com muito amor e dedicação, a ONG Patinhas que Brilham se empenha em
          resgatar e transformar a vida do maior número possível de animais em
          situação de vulnerabilidade. Nosso trabalho envolve resgate,
          tratamento, cuidados, castração e preparação para adoção responsável,
          tudo feito por uma equipe apaixonada pela causa animal. O resultado?
          Milhares de vidas preciosas que ganharam uma segunda chance e agora
          desfrutam de lares amorosos, cheios de carinho, panos fofos e
          barriguinhas sempre cheias.
        </p>
        <Image
          src={CatGif}
          alt=""
          width={140}
          className="absolute -top-[4.5rem] -right-[2rem] -z-10"
        />
      </section>
      <div id="pets"></div>
      <section className="mt-20">
        <h2
          className={`${fontGalada.className} text-center text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
          Animais disponíveis para adoção
        </h2>
        <div className="flex flex-wrap justify-center gap-20">
          {pets.map((e, i) => (
            <div
              key={i}
              className="
              text-center
              mt-12
              shadow-lg
              border-2
              !bg-[url(../assets/images/card-bg.png)]
              border-primary
              py-6
              px-10
              rounded-lg
              hover:-translate-y-2
              hover:brightness-110
              duration-300
              ">
              <Image
                src={e.image}
                alt="Pet image"
                width={180}
                className="rounded-full border-4"
              />
              <h3 className="text-xl mt-2 font-bold">{e.name}</h3>
              <p className="text-lg mt-2">{e.age}</p>
              <p className="text-lg mt-2">{e.cast}</p>
              <button className="bg-yellow mt-2 py-1 text-lg font-bold text-black rounded-full w-full">
                Adotar
              </button>
            </div>
          ))}
        </div>
      </section>
      <div id="como-ajudar"></div>
      <section className="relative max-w-[70rem] mt-20 border border-primary border-opacity-60 rounded-xl p-10">
        <Image
          src={CatHeart}
          alt=""
          width={120}
          className="absolute -top-[3rem] -right-[2.5rem]"
        />
        <h2
          className={`${fontGalada.className} absolute -top-4 left-auto bg-white px-4 text-4xl text-primary max-sm:rounded-full max-sm:px-0`}>
          Como ajudar?
        </h2>
        <ol className="flex justify-center flex-wrap gap-24 max-sm:gap-8">
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={PawIcon}
              alt="Logo ração"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">Adote um pet</p>
          </li>
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={InstaIcon}
              alt="Logo pix"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">
              Compartilhe nossas <br />
              redes sociais
            </p>
          </li>
        </ol>
        <h2
          className={`${fontGalada.className} text-3xl mt-10 text-center text-primary`}>
          Nós aceitamos doações de:
        </h2>
        <ol className="flex justify-center flex-wrap gap-24 max-sm:gap-8">
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={PixIcon}
              alt="Logo pix"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">Pix</p>
          </li>
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={DogFoodIcon}
              alt="Logo ração"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">Ração</p>
          </li>
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={RemedyIcon}
              alt="Logo pix"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">Medicamentos</p>
          </li>
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={SoapIcon}
              alt="Logo ração"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">
              Produtos de <br />
              Higiene
            </p>
          </li>
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={TowelIcon}
              alt="Logo pix"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">Cobertas</p>
          </li>
          <li className="mt-10 text-lg cursor-pointer duration-200 hover:-translate-y-2">
            <Image
              src={DotsIcon}
              alt="Logo ração"
              width={80}
              height={80}
              className="mx-auto drop-shadow-lg"
            />
            <p className="text-center mt-2">Outros</p>
          </li>
        </ol>
      </section>
      <div id="adocoes"></div>
      <section className="mt-20">
        <h2
          className={`${fontGalada.className} text-center text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
          Animais já adotados
        </h2>
        <div className="flex flex-wrap justify-center gap-20">
          {adoptedPets.map((e, i) => (
            <div
              key={i}
              className="
                text-center
                mt-12
                shadow-lg
                border-2
                !bg-[url(../assets/images/card-bg.png)]
                border-primary
                py-6
                px-10
                rounded-lg
                hover:-translate-y-2
                hover:brightness-110
                duration-300
              ">
              <Image
                src={e.image}
                alt="Pet image"
                width={180}
                className="rounded-full border-4"
              />
              <h3 className="text-xl font-bold">{e.name}</h3>
              <p className="text-lg">{e.age}</p>
              <p className="text-lg">{e.cast}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-28 w-full">
        <h2
          className={`${fontGalada.className} text-center text-4xl text-primary drop-shadow-[4px_4px_0px_#00000011]`}>
          Vídeo
        </h2>
        <div className="relative w-full max-lg:pb-[56.25%] overflow-hidden mt-10">
          <iframe
            src="https://www.youtube.com/embed/ObONmZopBZQ"
            className="absolute top-0 left-0 w-full h-full lg:static lg:w-[1000px] lg:h-[500px] mx-auto"></iframe>
        </div>
      </section>
      <div id="equipe"></div>
      <section className="relative max-w-[70rem] mt-32 border border-primary border-opacity-60 rounded-xl p-10 z-10">
        <Image
          src={CatPlaying}
          alt=""
          width={150}
          className="absolute -top-[5rem] -right-[3rem] -z-10"
        />
        <h2
          className={`${fontGalada.className} absolute -top-4 left-auto bg-white px-4 text-4xl text-primary`}>
          Nossa equipe
        </h2>
        <div className="flex flex-wrap justify-center gap-20">
          {team.map((e, i) => (
            <div
              key={i}
              className="
                flex
                flex-col
                items-center
                mt-12
                gap-5
                shadow-2xl
                !bg-[url(../assets/images/bg-equipe.png)]
                bg-cover
                border
                border-yellow
                pt-6
                pb-12
                px-10
                rounded-lg
                hover:-translate-y-2
                hover:brightness-105
                duration-200
              ">
              <Image
                src={e.image}
                alt="Pet image"
                className="border-[10px] border-white shadow-2xl h-[240px] min-w-[180px] max-w-[180px]"
              />
              <h3 className="text-2xl font-bold text-center font-mono">
                {e.name}
              </h3>
              <p className="text-lg">{e.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
