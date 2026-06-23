import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Config do Quartz para a apostila "Raciocínio Lógico".
 * Copie este arquivo para a RAIZ do repositório do Quartz (substitui o quartz.config.ts padrão).
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Raciocínio Lógico",
    pageTitleSuffix: " · Apostila",
    enableSPA: true,
    enablePopovers: true,        // pré-visualização ao passar o mouse no link
    analytics: null,             // sem rastreamento
    locale: "pt-BR",
    // ⚠️ EDITE: domínio público (GitHub Pages = usuario.github.io/REPO).
    baseUrl: "okm-s.github.io/Racioc-nio-l-gico",
    // Privado: nada dentro destes padrões vai pro site publicado.
    ignorePatterns: ["private", "templates", ".obsidian", ".claude", "**/*.canvas", "index.html", "build_site.py", "app_template.html"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Spectral",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FAF6EC", lightgray: "#E4DAC4", gray: "#9b9078",
          darkgray: "#4a4436", dark: "#241F18",
          secondary: "#B0641B", tertiary: "#2E6E63",
          highlight: "rgba(176,100,27,0.12)", textHighlight: "#fff3b8",
        },
        darkMode: {
          light: "#15130E", lightgray: "#322C21", gray: "#6b6452",
          darkgray: "#a79e89", dark: "#ECE3D1",
          secondary: "#DB8B3C", tertiary: "#62A89B",
          highlight: "rgba(219,139,60,0.14)", textHighlight: "#b3aa1d66",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }), // wikilinks + callouts + embeds
      Plugin.GitHubFlavoredMarkdown(),                               // tabelas, etc.
      Plugin.TableOfContents(),                                      // sumário por página
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),     // [[basename]] resolve em qualquer pasta
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),                       // fórmulas $...$
    ],
    filters: [Plugin.RemoveDrafts()],                                // notas com "draft: true" não publicam
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config

