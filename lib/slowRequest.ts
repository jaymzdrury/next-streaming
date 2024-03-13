import { Data, DataString } from "@/types";

export function slowRequest(props: Data): Promise<DataString> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(props.title);
    }, props.delay);
  });
}
