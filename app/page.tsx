import Component from "@/components/Component";
import { Suspense } from "react";

export default function Home(): JSX.Element {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Component title="1" delay={2000} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Component title="2" delay={4000} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Component title="3" delay={6000} />
      </Suspense>
    </main>
  );
}
