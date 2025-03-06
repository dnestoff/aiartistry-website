import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";

import IconStar from "~/components/icons/IconStar";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
  button?: {
    text: string;
    link: string;
    type?: 'primary' | 'secondary';
  };
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
  const { id, title = "", subtitle = "", highlight = "", items = [], isDark = false, classes = {} } = props;

  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>

      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <ItemGrid
          items={items.map(item => ({
            ...item,
            button: item.button ? {
              ...item.button,
              classes: "mt-4 inline-block bg-primary-500 dark:bg-primary-700 text-white py-2 px-4 rounded hover:bg-primary-600 dark:hover:bg-primary-800 transition duration-300",
              type: item.button.type // Set button type to the type passed in the item
            } : undefined
          }))}
          defaultIcon={IconStar}
          classes={{
            container: "md:grid-cols-2",
            title: "md:text-[1.3rem]",
            icon: "text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
            ...(classes?.items ?? {}),
          }}
        />
      </div>
    </section>
  );
});
