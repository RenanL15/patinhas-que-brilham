import Image from "next/image";
import Link from "next/link";
import PQBLogo from "@/assets/images/pqb-logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-20">
      <nav className="bg-black shadow-md max-md:py-4">
        <Image
          src={PQBLogo}
          alt="Logo"
          width={65}
          className="mx-auto bg-white rounded-full md:hidden"
        />
        <ul className="flex justify-center items-center text-white font-light max-md:hidden">
          <li className="bg-white rounded-full mx-7">
            <Link href="/">
              <Image src={PQBLogo} alt="Logo" width={50} />
            </Link>
          </li>
          {/* <li className="text-xl py-7"><Link href="#">Página</Link></li> */}
          <li className="text-md py-7 border-b-2 border-black hover:border-white">
            <Link href="/#sobre" className="p-7 hover:bg-neutral-800">
              Sobre
            </Link>
          </li>
          <li className="text-md py-7 border-b-2 border-black hover:border-white">
            <Link href="/#pets" className="p-7 hover:bg-neutral-800">
              Pets
            </Link>
          </li>
          <li className="text-md py-7 border-b-2 border-black hover:border-white">
            <Link href="/#como-ajudar" className="p-7 hover:bg-neutral-800">
              Como ajudar
            </Link>
          </li>
          <li className="text-md py-7 border-b-2 border-black hover:border-white">
            <Link href="/#adocoes" className="p-7 hover:bg-neutral-800">
              Adoções
            </Link>
          </li>
          <li className="text-md py-7 border-b-2 border-black hover:border-white">
            <Link href="/#equipe" className="p-7 hover:bg-neutral-800">
              Equipe
            </Link>
          </li>
          <li className="text-md py-7 border-b-2 border-black hover:border-white">
            <Link href="/nossa-missao" className="p-7 hover:bg-neutral-800">
              Nossa missão
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
