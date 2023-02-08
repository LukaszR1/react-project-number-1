import React from "react";
import Box from "./Box";
import { offerBoxes } from "../Data/ServicesArray";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container container-offer">
        <h1 className="header-offer">Czym zajmuje się nasza firma?</h1>
        <div className="box-offer">
          {offerBoxes.map((item, index) => (
            <Box key={index} isNew={item.isNew} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
