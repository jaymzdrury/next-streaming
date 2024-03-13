import { slowRequest } from "@/lib/slowRequest";
import { Data } from "@/types";

async function Component(props: Data): Promise<JSX.Element> {
  const data = await slowRequest(props);
  return <p>{data}</p>;
}

export default Component;
