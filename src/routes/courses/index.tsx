import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconApps = qwikSerialized(() => import("../../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"));
const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Features
        highlight="Courses"
        title="What our courses cover"
        subtitle="Courses designed to drive innovation, boost confidence, and ensure AI delivers real business value."
        items={[
          {
            title: "Greenfield thinking with AI ",
            description: "Equip everyone in your org to strategize to new and unencumbered possibilities.",
            icon: IconRocket,
          },
          {
            title: "How to Be an AI Transformationist",
            description: "The most valuable employee is the one who can teach AI to the rest.",
            icon: IconApps,
          },
          {
            title: "Building a Culture of AI Innovation",
            description: "Unlock the power of AI through upskilling, documenting, and collaboration.",
            icon: IconBulb,
          },
          {
            title: "Measuring the Value of AI",
            description: "The best strategies, frameworks and content to help your team capture the value of AI.",
          },
        ]}
      />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Everything there is to know about our AI training courses."
        highlight="FAQs"
        items={[
          {
            title: "What types of AI courses do you offer?",
            description:
              "We offer courses tailored to addressing key role and capabilities challenges, including AI basics, role-specific training, and strategies for integrating AI into daily workflows.",
          },
          {
            title: "How are your courses customized for my company's needs?", 
            description:
              "Our courses are designed with your industry and workforce in mind. A foundation of all courses is to enhance employee productivity and foster innovation.",
          },
          {
            title: "Who should attend these courses?",
            description:
              "These courses are ideal for employees at all levels, from non-technical staff to managers and technical teams, ensuring everyone gains the confidence to work effectively with AI.",
          },
          {
            title: "What makes your AI courses different?",
            description:
              "Our programs emphasize practical, role-specific training combined with actionable insights, focusing on human-AI collaboration and fostering a culture of innovation and ethical responsibility.",
          },
          {
            title: "How will these courses benefit my team?",
            description:
              "Your team will learn how to seamlessly adopt AI in their unique workflows, enhancing productivity while helping them embrace their enhanced roles as strategists. Organizations also see reduced risks positive effects on workplace culture.",
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
