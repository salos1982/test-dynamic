import { componentFactory } from "../components/componentFactory";

export default async function Home() {

  const blocks = ["h1", "text"];

  return (
    <main >
      {blocks.map((block, index) => componentFactory(block, index))}
    </main>
  );
}
