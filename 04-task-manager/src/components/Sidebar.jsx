export default function Sidebar() {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8  py-16 text-stone-50 md:w-72">
      <h2 className="font-bold uppercase">Your project</h2>
      <button className=" my-4 rounded-lg bg-stone-700 px-4 py-2 text-stone-400 transition delay-75 duration-300 hover:bg-stone-600 hover:text-white">
        + Add Project
      </button>
      <ul></ul>
    </aside>
  );
}
