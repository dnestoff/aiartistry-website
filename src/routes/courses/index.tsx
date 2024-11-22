import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../../components/icons/IconBrandGoogle"));
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
            title: "AI Strategy for Business",
            description: "Equip your business to thrive in the age of AI.",
          },
          {
            title: "AI Transformation: A People-First Approach",
            description: "Empower your people for the future of work.",
          },
          {
            title: "AI Literacy for Leaders", 
            description: "Drive AI adoption by understanding its capabilities.",
          },
          {
            title: "Building a Culture of AI Innovation",
            description: "Unlock the power of AI through collaboration.",
          },
          {
            title: "Measuring the Value of AI",
            description: "Ensure AI initiatives deliver tangible results.",
          },
        ]}
      />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Everything there is to know about our AI training programs."
        highlight="FAQs"
        items={[
          {
            title: "What types of AI courses do you offer?",
            description:
              "We offer courses tailored to address key business challenges, including AI basics for beginners, role-specific training, ethical AI practices, and strategies for integrating AI into daily workflows.",
          },
          {
            title: "How are your courses customized for my company's needs?", 
            description:
              "Our courses are designed with your goals in mind—whether you want to enhance employee productivity, foster innovation, or ensure ethical AI use, we customize training to align with your industry and workforce.",
          },
          {
            title: "Who should attend these courses?",
            description:
              "These courses are ideal for employees at all levels, from non-technical staff to managers and technical teams, ensuring everyone gains the skills and confidence to work effectively with AI.",
          },
          {
            title: "How will these courses benefit my team?",
            description:
              "Your team will learn how to seamlessly adopt AI, enhance productivity, embrace innovation, and align with strategic goals, while reducing risks and fostering a positive workplace culture.",
          },
          {
            title: "What makes your AI courses different?",
            description:
              "Our programs emphasize practical, role-specific training combined with actionable insights, focusing on human-AI collaboration and fostering a culture of innovation and ethical responsibility.",
          },
          {
            title: "How long are the courses, and what formats are available?",
            description:
              "Courses vary in length, from half-day workshops to multi-session programs, and are available in-person or online to fit your company's schedule and preferences.",
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
