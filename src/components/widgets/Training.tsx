import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", items = [], classes = {}, isDark = false } = props;

  return (
    <section class="relative" {...(id ? { id } : {})} id={id}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-4 md:py-8 lg:py-10 text-default flex flex-col md:flex-row",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <div class="flex-1 p-4">
          <h3 class={twMerge("text-2xl font-bold text-primary-600 dark:text-purple-200 ", classes?.headline)}>{title}</h3>
          <p class="text-lg mt-2">{subtitle}</p>
          <p class="text-lg mt-2 font-bold">{highlight}</p>
        </div>
        <div class="flex-1 p-4 border border-gray-200 rounded-lg">
          <ul class="list-disc pl-5">
            {items.map((item, index) => (
              <li key={index} class="mb-2">
                {item.icon && <span class="text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4 inline-block">{item.icon}</span>}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
