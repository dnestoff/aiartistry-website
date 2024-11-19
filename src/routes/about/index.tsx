import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero_About";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

import { SITE } from "~/config.mjs";

export default component$(() => {
    return (
        <>
          <Hero />
        </>
      );
});

export const head: DocumentHead = {
    title: SITE.title,
    meta: [
      {
        name: "description",
        content: SITE.description,
      },
    ],
};