export type Section = {
  id: number;
  title: string;
  component: React.ComponentType;
};

import Overview from "@/sections/Overview";
import ArchitectureOverview from "@/sections/ArchitectureOverview";
import InteriorSection from "@/sections/InteriorSection";
import Album from "@/sections/Album";
import ModelShowcase from "@/sections/ModelShowcase";

const overviewSection = {
  id: 0,
  title: "Overview",
  component: Overview,
};

const architecturalSection = {
  id: 1,
  title: "Arch. View",
  component: ArchitectureOverview,
};

const interiorSection = {
  id: 2,
  title: "Interior Views",
  component: InteriorSection,
};

const albumSection = {
  id: 3,
  title: "Album",
  component: Album,
};

const modelSection = {
  id: 4,
  title: "Model Showcase",
  component: ModelShowcase,
};

export const sections = [
  overviewSection,
  architecturalSection,
  interiorSection,
  albumSection,
  modelSection,
];
