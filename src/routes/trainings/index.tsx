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
        highlight="Trainings"
        title="Accelerating the adoption of AI"
        subtitle="Master AI essentials in just one hour! Our engaging, hands-on trainings give your team the skills and confidence to harness AI."
        items={[
          {
            title: "Boost Employee AI Readiness",
            description: "Equip your workforce with the skills and confidence to integrate AI seamlessly into their daily tasks.",
          },
          {
            title: "Bridge the Strategy Gap", 
            description: "Empower employees with clear guidance and practical training to align with your AI adoption goals.",
            icon: IconRocket,
          },
          {
            title: "Foster a Culture of Innovation",
            description: "Build a resilient, experimentation-driven workplace where AI enhances creativity and collaboration.",
            icon: IconBulb,
          },
          {
            title: "Enhance Productivity and Engagement",
            description: "Leverage AI to automate mundane tasks, allowing employees to focus on high-value, meaningful work.",
            icon: IconApps,
          },
          {
            title: "Promote Ethical and Responsible AI Use",
            description: "Ensure compliance, mitigate risks, and drive equitable AI practices through tailored education programs.",
            icon: IconBrandGoogle,
          },
          {
            title: "Gain a Competitive Edge",
            description: "Transform your workforce into an AI-savvy team that delivers measurable results and drives business success.",
            icon: IconRocket,
          },
        ]}
      />
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
            title: "Can the training be customized for my company's goals?",
            description:
              "Absolutely! We design our training to align with your industry, team needs, and objectives, whether it's boosting productivity, fostering innovation, or ensuring ethical AI adoption.",
          },
          {
            title: "Who should attend this training?",
            description:
              "Our training is suitable for everyone—from non-technical staff and managers to technical teams—empowering all levels to confidently leverage AI.",
          },
          {
            title: "What are the benefits of this training for my team?",
            description:
              "Participants will gain practical skills to adopt AI effectively, enhance productivity, foster innovation, and align with strategic goals while mitigating risks.",
          },
          {
            title: "What sets your training apart?",
            description:
              "Our programs combine hands-on training, actionable insights, and a focus on collaboration, innovation, and responsible AI usage to maximize value for your team.",
          },
          {
            title: "What are the training durations and delivery options?",
            description:
              "Training ranges from half-day workshops to multi-session programs and is available both in-person and online to fit your schedule.",
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
