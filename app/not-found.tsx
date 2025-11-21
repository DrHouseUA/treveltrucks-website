import { Metadata } from "next";
import css from "./Not-found.module.css";

export const metadata: Metadata = {
  title: `Not-found 404 of Travels Trucks`,
  description: "There is no such page!",
  openGraph: {
    title: `Not-found Travels Trucks`,
    description: "There is no such page",
    url: `https://github.com/DrHouseUA/treveltrucks-website`,
    siteName: "Travels Trucks",
    images: [
      {
        url: "https://.png",
        width: 1200,
        height: 630,
        alt: "Travels Trucks not-found image",
      },
    ],
    type: "article",
  },
};

export default function NotFound() {
  return (
    <div className={css.containerNotfound}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
