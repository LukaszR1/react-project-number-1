import workerList from "../../data/workerList";
import AboutWorker from "./AboutWorker";

export default function WorkersContainer() {
  const list = workerList.map(
    ({ nameEmployee, img, department, description }, index) => (
      <AboutWorker
        key={index}
        img={img}
        index={index}
        nameEmployee={nameEmployee}
        department={department}
        description={description}
      />
    )
  );
  return (
    <section id="about" className="about-us">
      <div className="container container-employees">
        <h1 className="section-title employees-section-title">
          Nasi specjaliści
        </h1>
        {list}
      </div>
    </section>
  );
}
