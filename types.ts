import { z } from "zod";

const Schema = z.object({
  title: z.enum(["1", "2", "3"]),
  delay: z.number().positive(),
});
export type DataString = z.infer<typeof Schema.shape.title>;
export type Data = z.infer<typeof Schema>;
