import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Hi</div>;
});

export const head: DocumentHead = {
  title: "Dominik Lutley",
  meta: [
    {
      name: "description",
      content: "Dominik Lutley's portfolio website",
    },
  ],
};
