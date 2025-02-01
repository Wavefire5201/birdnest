import dynamic from "next/dynamic";

const Overview = dynamic(() => import("@/sections/Overview"), { ssr: false });
const TechnicalSection = dynamic(() => import("@/sections/TechnicalSection"), {
  ssr: false,
});
const InteriorSection = dynamic(() => import("@/sections/InteriorSection"), {
  ssr: false,
});
const ExteriorSection = dynamic(() => import("@/sections/ExteriorSection"), {
  ssr: false,
});
const ArticlesSection = dynamic(() => import("@/sections/ArticlesSection"), {
  ssr: false,
});
const Album = dynamic(() => import("@/sections/AlbumSection"), { ssr: false });
const Sketch = dynamic(() => import("@/sections/Sketch"), { ssr: false });
const Earth = dynamic(() => import("@/sections/Earth"), { ssr: false });
const BookSection = dynamic(() => import("@/sections/BookSection"), {
  ssr: false,
});
const VideoSection = dynamic(() => import("@/sections/VideoSection"), {
  ssr: false,
});
const ModelShowcase = dynamic(() => import("@/sections/ModelShowcase"), {
  ssr: false,
});
const Sources = dynamic(() => import("@/sections/Sources"), { ssr: false });

let index = 0;

const overviewSection = {
  id: index++,
  title: "Overview",
  component: Overview,
};

const technicalSection = {
  id: index++,
  title: "Technical",
  component: TechnicalSection,
};

const interiorSection = {
  id: index++,
  title: "Interior",
  component: InteriorSection,
};

const exteriorSection = {
  id: index++,
  title: "Exterior",
  component: ExteriorSection,
};

const articlesSection = {
  id: index++,
  title: "Articles",
  component: ArticlesSection,
};

const albumSection = {
  id: index++,
  title: "Album",
  component: Album,
};

const sketchSection = {
  id: index++,
  title: "Sketch",
  component: Sketch,
};

const earthSection = {
  id: index++,
  title: "Earth",
  component: Earth,
};

const bookSection = {
  id: index++,
  title: "Book",
  component: BookSection,
};

const videoSection = {
  id: index++,
  title: "Video",
  component: VideoSection,
};

const modelSection = {
  id: index++,
  title: "Model",
  component: ModelShowcase,
};

const sourcesSection = {
  id: index++,
  title: "Sources",
  component: Sources,
};

export const sections = [
  overviewSection,
  technicalSection,
  exteriorSection,
  interiorSection,
  articlesSection,
  albumSection,
  sketchSection,
  earthSection,
  bookSection,
  videoSection,
  modelSection,
  sourcesSection,
];

export type Section = {
  id: number;
  title: string;
  component: React.ComponentType;
};
