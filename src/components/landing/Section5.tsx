import React from "react";
import { ContactaConNosotros, IframeMaps } from "..";

export const Section5 = () => {
  return (
    <section className="bg-section5 py-32">
      <div className="container bg-white  rounded-3xl">
        <div className="grid lg:grid-cols-2 ">
          <ContactaConNosotros />

          <div className="grid place-items-center lg:pr-14 md:px-10 md:pb-14 md:pt-7 sm:pt-5 xs:pt-3 ">
            <IframeMaps />
          </div>
        </div>
      </div>
    </section>
  );
};
