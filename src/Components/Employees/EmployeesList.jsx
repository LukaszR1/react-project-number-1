import "./Employees";

const EmployeeOnSide = ({
  nameEmployee,
  department,
  description,
  index,
  img,
}) => {
  const nameClass =
    index % 2 === 0 ? "about-employe-one " : "about-employe-two ";
  const setImg = index % 2 === 0 ? "img-employe-one" : "img-employe-two";
  const setNameandDepartment = index % 2 === 0 ? "employe-one" : "employe-two";

  return (
    <div className={nameClass}>
      <div className={setImg} style={{ backgroundImage: `url(${img})` }}></div>
      <div className={setNameandDepartment}>
        <p className="name-employe">
          {`${nameEmployee} `}
          {`${department}`}
        </p>
        <p className="paragraph-employe"> {`${description}`}</p>
      </div>
    </div>
  );
};
export default EmployeeOnSide;
