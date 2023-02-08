import React from "react";
import EmployeeData from "../Data/EmployeesArray";
import EmployeeOnSide from "./EmployeesList";

const EmployeeMap = () => {
  const SectionMap = EmployeeData.map(
    ({ nameEmployee, img, department, description }, index) => (
      <EmployeeOnSide
        key={index}
        img={img}
        index={index}
        nameEmployee={nameEmployee}
        department={department}
        description={description}
      ></EmployeeOnSide>
    )
  );
  return (
    <section id="about-us" className="about-us">
      <div className="container container-workers">
        <h1 className="header header-employe">Nasi specjaliści</h1>
        {SectionMap}
      </div>
    </section>
  );
};
export default EmployeeMap;
