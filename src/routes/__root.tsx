import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VIBOXS — Interstellar Village Agency" },
      {
        name: "description",
        content:
          "Cinematic AI creative agency. Recruit a Ranger, launch a mission. NASA-grade solutions at village prices.",
      },
      { name: "author", content: "VIBOXS" },
      { property: "og:title", content: "VIBOXS — Interstellar Village Agency" },
      { name: "twitter:title", content: "VIBOXS — Interstellar Village Agency" },
      { name: "description", content: "VIBOXS Command Center is a cinematic website for a futuristic AI and creative agency." },
      { property: "og:description", content: "VIBOXS Command Center is a cinematic website for a futuristic AI and creative agency." },
      { name: "twitter:description", content: "VIBOXS Command Center is a cinematic website for a futuristic AI and creative agency." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8edc79f3-e613-4b05-a746-5051694ea221/id-preview-1b0a074f--386e1707-cb78-4702-862d-7c053489242c.lovable.app-1776786071696.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8edc79f3-e613-4b05-a746-5051694ea221/id-preview-1b0a074f--386e1707-cb78-4702-862d-7c053489242c.lovable.app-1776786071696.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
