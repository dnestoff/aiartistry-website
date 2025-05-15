import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-J4J3PXYW80"></script>
      <script dangerouslySetInnerHTML={`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J4J3PXYW80');
      `} />

      <link rel="canonical" href={String(loc.url)} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}

      {head.links.map((l, i) => (
        <link key={i} {...l} />
      ))}

      {head.styles.map((s, i) => (
        <style key={i} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
