import { StoryblokComponent } from "@storyblok/react/rsc";
import Hero from "@/components/nestable/Hero";

// Content-type component (acts as template for all pages)
export default function Page({ blok }) {
  return (
    <main className="flex flex-col items-center p-4">
      {blok?.body?.map((blok) => {
        if (blok.component === "Hero") {
          return <Hero blok={blok} key={blok._uid} />;
        }
        return <StoryblokComponent blok={blok} key={blok._uid} />;
      })}
    </main>
  );
}
