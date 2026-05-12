import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      mapFn: (node) => {
        const folderNames: Record<string, string> = {
          domains: "Domains",
          essays: "Essays",
          ideas: "Ideas",
          maps: "Maps",
          projects: "Projects",
          publications: "Publications",
        }

        if (node.isFolder && node.slugSegment) {
          node.displayName = folderNames[node.slugSegment] ?? node.displayName
        }
      },
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 1,
        scale: 1.1,
        linkDistance: 30,
      },
      globalGraph: {
        depth: -1,
        scale: 0.9,
        repelForce: 0.7,
        linkDistance: 80,
        fontSize: 0.75,
        focusOnHover: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      mapFn: (node) => {
        const folderNames: Record<string, string> = {
          domains: "Domains",
          essays: "Essays",
          ideas: "Ideas",
          maps: "Maps",
          projects: "Projects",
          publications: "Publications",
        }

        if (node.isFolder && node.slugSegment) {
          node.displayName = folderNames[node.slugSegment] ?? node.displayName
        }
      },
    }),
  ],
  right: [],
}
