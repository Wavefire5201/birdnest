import Overview from "@/sections/Overview";
import TechnicalSection from "@/sections/TechnicalSection";
import InteriorSection from "@/sections/InteriorSection";
import ExteriorSection from "@/sections/ExteriorSection";
import ArticlesSection from "@/sections/ArticlesSection";
import Album from "@/sections/AlbumSection";
import Sketch from "@/sections/Sketch";
import Earth from "@/sections/Earth";
import BookSection from "@/sections/BookSection";
import VideoSection from "@/sections/VideoSection";
import ModelShowcase from "@/sections/ModelShowcase";
import Credits from "@/sections/Credits";

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
  title: "Model Showcase",
  component: ModelShowcase,
};

const creditsSection = {
  id: index++,
  title: "Credits",
  component: Credits,
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
  creditsSection,
];

export type Section = {
  id: number;
  title: string;
  component: React.ComponentType;
};
