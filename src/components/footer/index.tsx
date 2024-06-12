import Image from "next/image";
import Link from "next/link";
import PQBLogo from "@/assets/images/pqb-logo.png";

import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaMapPin,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center items-center text-white gap-8 border-t-4 bg-black py-16">
      <div className="flex flex-col gap-8">
        <span>
          <FaInstagram className="inline mr-2" />
          ongpatinhasquebrilham
        </span>
        <span>
          <FaFacebook className="inline mr-2" />
          Ong Patinhas que Brilham
        </span>
        <span>
          <FaRegEnvelope className="inline mr-2" />
          ongpatinhasquebrilham@gmail.com
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <span>
          <FaPhoneAlt className="inline mr-2" />
          (013) 99656 6970
        </span>
        <span>
          <FaMapPin className="inline mr-2" />
          R. Carvalho de Mendonça, <br /> 670 - Marapé, Santos - SP, 11070-103
        </span>
      </div>
      <div className="flex flex-col items-center gap-6">
        <Image
          src={PQBLogo}
          alt="Logo"
          width={200}
          className="bg-white rounded-full"
        />
        <Link href="/conheca-mais">
          <span className="hover:underline">Conheça mais por aqui</span>
          <FaArrowRight className="inline ml-2 align-middle" />
        </Link>
      </div>
    </footer>
  );
}
