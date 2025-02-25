import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage = "/images/Dave_headshot_Simplifya_1500x1500.jpeg";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              I'm Dave Nestoff <br class="hidden lg:block" />{" "}
              <span class="hidden lg:inline">the creator of </span>
              <span class="sm:whitespace-nowrap text-[#039de1]">AI Artistry</span>
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                I have a deep interest in how AI helps teams and companies and a{" "}
                <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  decade of experience training users of all levels.
                </span>{" "}
                  Whether it's for the AI Artistry newsletter or in the proverbial conference room, I'm constantly finding new branches for my AI journey and bringing others along with me.
              </p>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="AI Artistry - Dave Nestoff Headshot"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
