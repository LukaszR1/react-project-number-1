import BoxOffer from "./BoxOffer";
import { offerList } from "../../data/offerList";

export default function BoxContainer() {
  return (
    <section id="offer-section" className="offer-section">
      <div className="container container-offer">
        <h1 className="section-title section-offer-title">
          Czym zajmuje się nasza firma?
        </h1>
        <div className="container-box-offer">
          {offerList.map((item, index) => (
            <BoxOffer key={index} isNew={item.isNew} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
