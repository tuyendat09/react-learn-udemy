import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div className="">
        <Input label={"Title"} />
        <Input label={"Description"} textarea />
        <Input label={"Due date"} />
      </div>
    </div>
  );
}
