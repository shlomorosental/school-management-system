const { useState } = require("react");
const { default: SelectComponent } = require("./SelectComponent");

function EditRow({ teacherList, data, renderPage, setIsEdit }) {
  const [name, setName] = useState(data.name);
  const [nameTeacher, setNameTeacher] = useState("");
  const [clas, setClass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !nameTeacher || !clas) return;
    else {
      let obj = { name, teacher : nameTeacher, class : clas };
      fetch(`http://localhost:5000/api/courses/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      }).then((res) => {
        renderPage();
        setIsEdit(false);
        res.text();
      });
    }
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SelectComponent
        setv={setNameTeacher}
        options={teacherList.map(
          (item) => item.first_name + " " + item.last_name
        )}
      />
      <SelectComponent setv={setClass} options={[1, 2, 3, 4, 5, 6, 7]} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}
export default EditRow;
