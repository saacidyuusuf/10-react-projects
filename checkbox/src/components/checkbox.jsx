import { useState } from "react";

const students = [
  {
    id: 1,
    name: "cabdimalik",
  },
  {
    id: 2,
    name: "cali",
  },
  {
    id: 3,
    name: "cumar",
  },
];

const ListStudent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [allChecked, setAllChecked] = useState([]);

  const handleAllCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    if (checked) {
      const allStudentNames = students.map((student) => student.name);
      setAllChecked(allStudentNames);
    } else {
      setAllChecked([]);
    }
  };

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const checked = event.target.checked;
    if (checked) {
      setAllChecked((prevState) => [...prevState, checkboxName]);
    } else {
      setAllChecked((prevState) =>
        prevState.filter((name) => name !== checkboxName)
      );
    }
  };

  return (
    <>
      <div className="listStudents">
        <div className="tableHaye">
        <h2 className="total">
          Total Students: <span>{students.length}</span>
        </h2>
        <div className="checkthem">
          <h2>Check Them all</h2>
          <input
            checked={isChecked}
            onChange={handleAllCheckboxChange}
            type="checkbox"
            className="radio"
            />
            </div>
            {students.map((student) => (
              <>
                <div className="nameHaye">
                  <div className="tablename">
                    <p>{student.id}:</p>
                    <p className="studentNames">{student.name}</p>
                  </div>
                  <div className="divRadio">
                    <input
                      type="checkbox"
                      checked={allChecked.includes(student.name)}
                      name={student.name}
                      className="radio"
                      onChange={handleCheckboxChange}
                    />
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default ListStudent;