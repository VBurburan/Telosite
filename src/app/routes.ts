import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layout";
import { HomePage } from "./pages/home";
import { HowItWorksPage } from "./pages/how-it-works";
import { ProtocolsPage } from "./pages/protocols";
import { SciencePage } from "./pages/science";
import { AboutPage } from "./pages/about";
import { GetStartedPage } from "./pages/get-started";
import { TreatmentPage } from "./pages/treatment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "how-it-works", Component: HowItWorksPage },
      { path: "protocols", Component: ProtocolsPage },
      { path: "protocols/:slug", Component: TreatmentPage },
      { path: "science", Component: SciencePage },
      { path: "about", Component: AboutPage },
      { path: "get-started", Component: GetStartedPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
