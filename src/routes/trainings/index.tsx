import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import CallToAction from "~/components/widgets/CallToAction";
import Training from '~/components/widgets/Training';

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconApps = qwikSerialized(() => import("../../components/icons/IconApps"));
const IconBulb = qwikSerialized(() => import("../../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Features
        highlight="Trainings"
        title="Accelerating the adoption of AI"
        subtitle="Interactive, hands-on trainings give your team the skills and confidence to harness AI."
        items={[
          {
            title: "Boost Employee AI Readiness",
            description: "Equip your workforce with the skills and confidence to integrate AI into their daily tasks.",
          },
          {
            title: "Bridge the Strategy Gap", 
            description: "Empower employees with clear guidance and practical training aligned to AI adoption goals.",
            icon: IconApps,
          },
          {
            title: "Foster a Culture of Innovation",
            description: "Build a resilient, experimentation-driven workplace where AI enhances creativity.",
            icon: IconBulb,
          },
        ]}
      />
      <div>
        <h2 class="text-center text-4xl font-bold space-y-6">Our Trainings</h2>
        <Training
          title="10X Copywriting with AI"
          subtitle="Learn proven systems to write 10X faster while maintaining quality"
          items={[
            { text: "Speed techniques that cut drafting time by 90%" },
            { text: "Includes ChatGPT mastery, CRAFT framework, and speed techniques" },
            { text: "Generate 50+ headlines in seconds, not hours" },
            { text: "Generate 50+ headlines in seconds, not hours" }
          ]}
        />
        <Training
          title="Mastering AI-Powered Research"
          subtitle="Transform your research capabilities with practical AI tools and frameworks"
          items={[
            { text: "Reduce research time from days to hours" },
            { text: "Prerequisites required" },
            { text: "Proven research prompts and data synthesis techniques" },
            { text: "Generate 50+ headlines in seconds, not hours" }
          ]}
        />
        <Training
          title="Enhanced Brainstorming with AI"
          subtitle="Transform your team's ideation process."
          items={[
            { text: "Reduce research time from days to hours" },
            { text: "Prerequisites required" },
            { text: "Proven research prompts and data synthesis techniques" },
            { text: "Generate 50+ headlines in seconds, not hours" }
          ]}
        />
      </div>
      <FAQs
        title="Frequently Asked Questions"
        highlight="FAQs"
        items={[
          {
            title: "What types of AI training do you offer?",
            description:
              "We provide training on AI essentials, ethical practices, role-specific skills, and strategies for integrating AI into everyday workflows tailored to your business challenges.",
          },
          {
            title: "Can the training be customized for my company?",
            description:
              "Absolutely! We design our training to align with your industry, team needs, and objectives, whether it's boosting productivity, fostering innovation, or ensuring ethical AI adoption.",
          },
          {
            title: "What sets your training apart?",
            description:
              "Our programs combine hands-on training, actionable insights, and a focus on collaboration, innovation, and responsible AI usage to maximize value for your team.",
          },
          {
            title: "What are the training delivery options?",
            description:
              "Training is available both in-person and online to fit your schedule.",
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
