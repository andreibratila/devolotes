import Link from "next/link";
import Image from "next/image";
import Map from "@/svgs/map.svg";

import { Email, Telefono, Whatsapp } from "@/data/svg";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-footer-color to-footer-last text-footer-white">
      <div>
        <div className="pt-10 pb-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div>
              <h1 className="text-white">LOGO GUAPOTE PEGOTE</h1>
            </div>
            {/* CONTACTANOS */}
            <div>
              <h2 className="text-2xl pb-2 text-white">Contacto</h2>
              <address>
                <ul>
                  <li className="flex items-center pb-3">
                    {/* <Map /> */}
                    <p>ubicacion</p>
                  </li>
                  <li className="flex items-center pb-3">
                    <Image
                      className="pr-2"
                      width={30}
                      height={30}
                      src={Telefono}
                      alt="Telefono"
                    />
                    <p>Tel. y Whatsapp:(+34) 622 19 19 19 </p>
                  </li>
                  <li className="flex items-center pb-3">
                    <Image
                      className="pr-2"
                      width={30}
                      height={30}
                      src={Email}
                      alt="Email"
                    />
                    <p>info@devolotes.com</p>
                  </li>
                  <li className="flex items-center pb-3">
                    <Image
                      className="pr-2"
                      width={30}
                      height={30}
                      src={Whatsapp}
                      alt="Wathsapp"
                    />
                    <p>Canal de Whatsapp</p>
                  </li>
                </ul>
              </address>
            </div>

            {/* LINKS DE INTERES */}
            <nav>
              <ul>
                <li>
                  <Link href="/condiciones-de-compra">
                    Condiciones de compra
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidad">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/aviso-legal">
                    Aviso legal y condiciones generales de uso
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5 ">
        <p className="shadow-xl p-2 ">
          © Copyright devolotes.com 2023 -{" "}
          <Link href="/terminos-y-condiciones" className=" hover:text-white">
            Términos y condiciones
          </Link>{" "}
          -{" "}
          <Link href="/politica-de-privacidad" className=" hover:text-white">
            Política de privacidad
          </Link>
        </p>
      </div>
    </footer>
  );
};
