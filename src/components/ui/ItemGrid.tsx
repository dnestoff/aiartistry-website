import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  button?: {
    text: string;
    link: string;
    classes?: string;
    type?: 'primary' | 'secondary'; // Added button type option
  };
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  defaultIcon?: any;
  classes?: Record<string, string>;
}

export const ItemGrid = (props: Props) => {
  const { items = [], defaultIcon: DefaultIcon = null, classes = {} } = props;

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-secondary-500 dark:text-secondary-700",
    button: buttonClass = "mt-4 inline-block bg-primary-500 dark:bg-primary-700 text-white py-2 px-4 rounded hover:bg-primary-600 dark:hover:bg-primary-800 transition duration-300",
    secondaryButton: secondaryButtonClass = "mt-4 inline-block border border-primary-500 dark:border-primary-700 text-white py-2 px-4 rounded hover:bg-primary-600 dark:hover:bg-primary-800 transition duration-300", // Adjusted secondary button class to remove button color
  } = classes as Record<string, string>;

  return (
    items.length && (
      <div class={twMerge("grid mx-auto gap-8", containerClass)}>
        {items.map(({ title, description, icon: Icon, button, classes: itemClasses = {} }, index) => (
          <div key={`${title}${index}`}>
            <div class={twMerge("flex flex-row max-w-md", panelClass, itemClasses.panel)}>
              <div class="flex justify-center">
                {(Icon || DefaultIcon) &&
                  (Icon ? (
                    <Icon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ) : (
                    <DefaultIcon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ))}
              </div>
              <div>
                <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses.title)}>{title}</h3>
                {description && (
                  <p
                    class={twMerge("text-gray-600 dark:text-slate-400 mt-3", descriptionClass, itemClasses.description)}
                    dangerouslySetInnerHTML={description}
                  />
                )}
                {button && (
                  <a href={button.link} class={twMerge(button.type === 'secondary' ? secondaryButtonClass.replace("bg-primary-500 dark:bg-primary-700", "") : buttonClass, itemClasses.button)}>
                    {button.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
