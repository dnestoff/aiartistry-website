# 💠 Qwind

**Qwind** is a free and open-source template to make your website using **[Qwik](https://qwik.builder.io/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account best practices.

## Features

- ✅ Integration with **Tailwind CSS** supporting **Dark mode**.
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports.
- ✅ **Image optimization** and **Font optimization**.

<br>

<img src="./screenshot.jpg" alt="Qwind Theme Screenshot">

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/qwind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/qwind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/qwind#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/qwind/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/qwind)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://qwind.pages.dev/](https://qwind.pages.dev/)

<br>

## Getting started

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just a extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

### Project structure

Inside **Qwind** template, you'll see the following folders and files:

```
/
├── adaptors/
|   └── static/
|       └── vite.config.ts
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── global.css
│   ├── components/
│   │   ├── atoms/
│   │   ├── core/
│   │   ├── icons/
|   |   └── widgets/
|   |       ├── Hero.tsx
|   |       ├── Features.tsx
|   |       └── ...
│   ├── content/
│   |   └── blog/
│   |       ├── post-slug-1.md
│   |       ├── post-slug-2.md
│   |       └── ...
│   ├── routes/
│   |   ├── blog/
│   |   ├── index.tsx
|   |   ├── layout.tsx
|   |   ├-- service-worker.ts
│   |   └-- ...
│   ├── config.mjs
│   ├── entry.dev.tsx
│   ├── entry.preview.tsx
│   ├── entry.ssr.tsx
│   └── root.tsx
├── package.json
└── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

[![Edit Qwind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/qwind/tree/main)

> **Seasoned qwik expert?** Delete this file. Update `config.mjs` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                         |
| :----------------- | :--------------------------------------------- |
| `npm install`      | Installs dependencies                          |
| `npm run dev`      | Starts local dev server at `127.0.0.1:5173/`   |
| `npm run build`    | Build your production site to `./dist/`        |
| `npm run preview`  | Preview your build locally, before deploying   |
| `npm run fmt`      | Format codes with Prettier                     |
| `npm run lint`     | Run Eslint                                     |
| `npm run qwik ...` | Run CLI commands like `qwik add`, `qwik build` |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
export const SITE = {
  name: "Example",

  origin: "https://example.com",
  basePathname: "/", // Change this if you need to deploy to Github Pages, for example
  trailingSlash: true, // Generate permalinks with or without "/" at the end
};
```

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/qwind)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fqwind)

<br>

## Roadmap

### Base

- [ ] Create utilities to generate permalinks tailored to the domain and base pathname.
- [ ] Simplify the way to optimize images.
- [ ] Create component to make SEO simpler and more intuitive.
- [ ] Create configurable blog with categories, tags and authors using MDX.
- [ ] Add more frequently used pages (Portfolio, Services, Contact, Docs ...).
- [ ] Find or create a library to have more icon sources available.
- [ ] Refactor some code that doesn't follow Qwik conventions yet.

### Advanced

- [ ] Achieve perfect 100% Google Page Speed score.
- [ ] Insert complex javascript example widget on home page to demonstrate Qwik features.
- [ ] Create small illustrative admin backend.

<br>

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/qwind/graphs/contributors).

## License

**Qwind** is licensed under the MIT license — see the [LICENSE](https://github.com/onwidget/qwind/blob/main/LICENSE.md) file for details.

# AI Music Capabilities Quadrant – Customization Prompts & Documentation

This README collects all the prompts and instructions used to update and customize the AI Music Capabilities Quadrant HTML file. Use these as a reference for reusing or adapting the same modifications on another HTML file.

---

## 1. Updating Plotted Capabilities
**Prompt:**
> Please pull me a list of all of the items plotted within my quadrant grid (e.g. "MIDI humanization"). I want the complete list of them added to a table format with the item in COLUMN A, and then the following other columns: "Creativity", "Authenticity", Category.

---

## 2. Axis Label Explanations
**Prompt:**
> Given my quadrant design and results, please write me two paragraphs explaining the axes for "Creativity" and "Authenticity". Get into detail about what these mean and what high/low signify for us.

---

## 3. Color Palette Customization
**Prompt:**
> How can I adjust the color palette to use the colors for my theme:
> - Background Color: #3c3a37
> - Text accent color: #ff9f05
> - Text color: #ffffff
> - Background accent color: #039de1

---

## 4. Changing Quadrant Background Color
**Prompt:**
> Please change the background color of my quadrant to white.

---

## 5. Adding/Removing Capabilities
**Prompt:**
> Please remove the following capabilities from both sections of this diagram:
> * Audience analytics
> * Revenue optimization

**Prompt:**
> Please add the following 12 items to both sections. And list out capabilities in their respective categories (e.g. "### Idea capture & transformation") in the lower section. You can ignore the term definitions.
> -- Items to add START --
> (List of new capabilities and categories)
> -- Items to add END --

**Prompt:**
> Please remove all of the following items from both the top and bottom. This should be everything in the "Business and Analytics" category:
> (List of items)

---

## 6. Recategorizing and Updating Data
**Prompt:**
> Please update my data to recategorize my capabilities as well as update some of the x and y axis values. Here's the new data:
> -- New data START --
> (New categories and capabilities with A/C values)
> -- New data END --

---

## 7. Axis Label and Grid Adjustments
**Prompt:**
> Please update my grid so that it shows Creativity on the x axis (the same way it currently shows "Authenticity")

**Prompt:**
> Please adjust the CSS of my x-axis-label so that it shows at the bottom center of my quadrant container.

**Prompt:**
> The label the "Creativity" is not appearing in the quadrant currently.

**Prompt:**
> This will ensure the label is always visible just INSIDE the grid.

**Prompt:**
> Now please adjust the y-axis-label to have the same margin from the left side of the grid that Creativity has from the bottom.

**Prompt:**
> Please reduce the distance between "Authenticity" and the left wall of the grid.

---

## 8. Updating Specific Capabilities
**Prompt:**
> Please update the following capabilities in both the top and bottom section:
> -- capabilities START --
> (List of updated capabilities and values)
> -- capabilities END --

---

## 9. Category Definitions
**Prompt:**
> Can you please pull me a list of all of the categories for my capabilities. Please also come up with a rock-solid definition of what each category refers to in the music making process. Each definition should be 40 words MAX.

---

## 10. Adding a Logo SVG
**Prompt:**
> Please add the following SVG to my file. It's my logo and it should be placed next to the title ("AI in Music Production").

---

## Usage
- Copy and adapt these prompts as needed for your own HTML/CSS/JS music quadrant or similar data visualization projects.
- For each section, replace the example data with your own as needed.
- Use the prompts as instructions for an AI assistant or as a checklist for manual editing.

---

**Tip:** For best results, keep your data and categories organized, and always back up your HTML file before making bulk changes.
