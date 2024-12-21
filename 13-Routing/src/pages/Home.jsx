import { useParams } from "react-router-dom";

export default function Home() {
  const param = useParams();
  console.log(param.id);

  return (
    <>
      <h1>home work</h1>
      {param.id}
    </>
  );
}
