import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Stats />
      <Features
        title="What We Do"
        subtitle="We specialize in trainings, courses, and workshops designed to accelerate AI adoption across your organization."
        items={[
          {
            title: "Trainings",
            description:
              "Our one- and two-hour training programs teach employees to integrate AI into their daily workflows. From fostering innovation to promoting AI champions, equip your workforce with practical habits that boost productivity and confidence with AI.",
            icon: IconBulb,
          },
          {
            title: "Workshops",
            description:
              "Full and half-day workshops tailored to your team's unique challenges. We work with leaderships teams to assess readiness and develop targeted guidance, delivering interactive sessions to accelerate adoption and align with your goals.",
            icon: IconRocket,
          },
          {
            title: "Courses (Coming Soon)",
            description:
              "Digital courses teach foundational skills, including role-specific prompting, ethical AI practices, and strategies for bringing AI to the workplace.",
            icon: IconApps,
          },
        ]}
      />
      <FAQs
        title="Empower Your Workforce"
        subtitle="While others focus on your tech, we focus on your people, bridging the gap between potential and real-world impact."
        items={[
          {
            title: "Increase AI Adoption and Usage",
            description:
              "Without equipping employees with guidance and skills, low adoption rates throttle the potential of AI investments.",
          },
          {
            title: "Improve Employee Productivity and Engagement",
            description:
              "Free up employees to focus on higher-value work, leading to increased productivity and job satisfaction.",
          },
          {
            title: "Foster a Culture of Innovation and Experimentation",
            description:
              "Cultivate a workplace that embraces AI as a tool for innovation and encourages fearless experimentation.",
          },
          {
            title: "Mitigate Risks and Ensure Responsible AI Deployment",
            description:
              "Education on ethical considerations, data privacy, and responsible usage minimizes potential risks.",
          },
          {
            title: "Enhance Business Outcomes and Competitiveness",
            description:
              "Every power user of AI delivers a competitive edge in the rapidly evolving digital landscape.",
          },
          {
            title: "Drive an Ethical Impact on Workers",
            description:
              "Provide employees with confidence that AI exposure is being driven with equity and inclusion in mind.",
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
