"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Header from "@/components/nestable/Header";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Grid from "@/components/nestable/Grid";
import Footer from "@/components/nestable/Footer";
import NotFound from "@/app/not-found";

const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  config: Header,
  config: NotFound,
  grid: Grid,
  footer: Footer,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
