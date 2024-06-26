import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/keeprules",
    handle: "@keeprules",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/sergio_estebitan/",
    handle: "sergio_estebitan",
  },
  {
    id: 3,
    name: "Github",
    url: "https://github.com/myplancash",
    handle: "myplancash",
  },
  {
    id: 4,
    name: "Medium",
    url: "https://medium.com/@sergio.smiling",
    handle: "@sergio.smiling",
  },
];

const title = "Newsletter";
const description =
  "Full-Stack Software Engineer 🧑🏻‍💻 working with cutting-edge stuff.";
const image =
  "https://yt3.ggpht.com/VoEBu0KxtQkfWretx-3_NqxKnoLqfKNTtWq0KFigdqaqVQFz8CggKgqkcxXqCDW7zYWlZZJOuQ=s108-c-k-c0x00ffffff-no-rj";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://portfolio-website-ruddy-beta.vercel.app",
    siteName: "Sergio Esteban Torres, Full-Stack Software Engineer",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@keeprules",
  },
};