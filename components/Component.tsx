import { slowRequest } from "@/lib/slowRequest";

async function Component({ title, delay }: { title: string; delay: number }) {
  const data = await slowRequest(title, delay);
  return <p>{data}</p>;
}

export default Component;
