import "./WorkersContainer";

export default function AboutWorker({
  nameEmployee,
  department,
  description,
  index,
  img,
}) {
  const setClass =
    index % 2 === 0 ? "about-employe-odd " : "about-employe-even ";
  const setImg = index % 2 === 0 ? "img-employe-odd" : "img-employe-even";
  const setNameAndDepartment = index % 2 === 0 ? "employe-odd" : "employe-even";

  return (
    <div className={setClass}>
      <div className={setImg} style={{ backgroundImage: `url(${img})` }}></div>
      <div className={setNameAndDepartment}>
        <p className="name-employe">{`${nameEmployee} ${department}`}</p>
        <p className="paragraph-employe"> {`${description}`}</p>
      </div>
    </div>
  );
}
