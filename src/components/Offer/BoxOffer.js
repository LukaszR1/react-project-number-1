export default function BoxOffer({ isNew, title }) {
  return isNew ? (
    <div className="box-new-offer box">
      <div className="new-offer-dot"></div>
      {title}
      <p className="new-offer-paragraph">(nowość)</p>
    </div>
  ) : (
    <div className="box">{title}</div>
  );
}
