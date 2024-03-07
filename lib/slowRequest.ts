export function slowRequest(data: string, delay: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}
