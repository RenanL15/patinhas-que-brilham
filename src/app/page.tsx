import Image from "next/image";
import PQBLogo from "@/assets/images/pqb-logo.png";
import PQBBanner from "@/assets/images/anuncioPatinhasqBrilham.png";
// import DogPaw from "@/assets/images/dog-paw.png";
import DogPaw from "@/assets/images/lovely-cat.gif";
import { Galada } from "next/font/google";

const fontGalada = Galada({ weight: "400", subsets: ["latin"] });

const pets = [
  {
    name: "Maggie",
  },
];

export default function Home() {
  return (
    <>
      <header className="fixed top-0 w-full z-10">
        <nav className="bg-orange-400 py-5">
          <ul className="flex justify-center items-center gap-4 text-white font-light max-sm:hidden">
            <li className="bg-white rounded-full">
              <Image src={PQBLogo} alt="Logo" width={40} />
            </li>
            <li>Página</li>
            <li>Sobre</li>
            <li>Pets</li>
            <li>Como ajudar</li>
            <li>Adoções</li>
            <li>Equipe</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center gap-6 min-h-screen py-28 px-8 max-sm:overflow-x-hidden">
        <h1
          className={`${fontGalada.className} text-4xl text-center text-orange-500 drop-shadow-[4px_4px_0px_#00000011]`}>
          ONG - Patinhas que brilham
        </h1>
        <Image src={PQBBanner} alt="Banner da ONG Patinhas Que Brilham" />
        <section className="relative max-w-[50rem] mt-28 border border-orange-600 border-opacity-50 rounded-xl p-10">
          <h2
            className={`${fontGalada.className} text-center text-4xl text-orange-500 drop-shadow-[4px_4px_0px_#00000011]`}>
            Sobre
          </h2>
          <p className="leading-8 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis culpa
            id est non voluptatem cumque debitis distinctio deserunt saepe optio
            sequi harum minima eum aspernatur tenetur architecto, delectus ut,
            facere dolorum quasi recusandae quae magnam explicabo. Eaque eum
            voluptatum labore voluptatibus aut quos libero vero pariatur quia at
            excepturi saepe consequatur temporibus, rem, sed totam. Sapiente
            inventore eveniet culpa, pariatur iste minus adipisci quis
            praesentium, quae voluptates ipsa eius labore explicabo iure
            reprehenderit odit dicta nihil aperiam fugit porro at. Architecto
            voluptates quia eveniet, quis adipisci quod, aliquam delectus
            accusantium illo aperiam ipsam ipsa eum. Quas eveniet dolor officia
            dicta.
          </p>
          <Image
            src={DogPaw}
            alt=""
            width={150}
            className="absolute -top-[2.5rem] -right-[3rem]"
          />
        </section>
        <section>
          <h2
            className={`${fontGalada.className} text-center text-4xl text-orange-500 drop-shadow-[4px_4px_0px_#00000011]`}>
            Animais
          </h2>
          <div>
            <div className="">
              <Image src={PQBLogo} alt="Pet image" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
