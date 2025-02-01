import dynamic from "next/dynamic";

const dynamicImport = (path: string) =>
  dynamic(() => import(path), { ssr: false });
const Overview = dynamicImport("@/sections/Overview");
const TechnicalSection = dynamicImport("@/sections/TechnicalSection");
const InteriorSection = dynamicImport("@/sections/InteriorSection");
const ExteriorSection = dynamicImport("@/sections/ExteriorSection");
const ArticlesSection = dynamicImport("@/sections/ArticlesSection");
const Album = dynamicImport("@/sections/AlbumSection");
const Sketch = dynamicImport("@/sections/Sketch");
const Earth = dynamicImport("@/sections/Earth");
const BookSection = dynamicImport("@/sections/BookSection");
const VideoSection = dynamicImport("@/sections/VideoSection");
const ModelShowcase = dynamicImport("@/sections/ModelShowcase");
const Sources = dynamicImport("@/sections/Sources");

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
