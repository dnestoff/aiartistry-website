import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Steps />
      <Stats />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Scale your AI capabilities to new heights with workshops built just for you."
        highlight="FAQs"
        items={[
          {
            title: "What types of workshops do you offer?",
            description:
              "We provide workshops on AI essentials, ethical practices, role-specific skills, and strategies for integrating AI into everyday workflows tailored to your business challenges.",
          },
          {
            title: "What sets your AI workshops apart?",
            description:
              "Our programs combine hands-on workshops, actionable insights, and a focus on collaboration, innovation, and responsible AI usage to maximize value for your team.",
          },
          {
            title: "Can the workshops be customized for my company?",
            description:
              "Absolutely! We design our workshops to align with your industry, team needs, and objectives, whether it's boosting productivity, fostering innovation, or ensuring ethical AI adoption.",
          },
          {
            title: "Who should attend these workshops?",
            description:
              "Our workshops are suitable for everyone—from non-technical staff and managers to technical teams—empowering all levels to confidently leverage AI.",
          },
          {
            title: "How do these workshops benefit my team?",
            description:
              "Participants will gain practical skills to adopt AI effectively, enhance productivity, foster innovation, and align with strategic goals while mitigating risks.",
          },
        ]}
      />
      <CallToAction />
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
