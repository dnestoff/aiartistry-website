import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                AI Artistry
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Copyright AI Artistry 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
