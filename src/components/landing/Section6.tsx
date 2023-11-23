import Link from "next/link";
import React from "react";

export const Section6 = () => {
  return (
    <section className="flex  place-content-center items-center h-96">
      <div className="text-center flex flex-col space-y-20">
        <h1 className="text-4xl font-bold">
          ¿Preparado para comenzar con las devoluciones de Amazon?
        </h1>
        <button>
          <Link
            href="#_"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-footer-color border-2 border-footer-color rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-footer-color opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Descubrir Lotes en Venta</span>
          </Link>
        </button>
      </div>
    </section>
  );
};
