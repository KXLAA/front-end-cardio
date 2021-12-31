export interface Assets {
  url: string;
}

export interface ProjectProps {
  id: string;
  name: string;
  poster: Assets;
  codeLink: string;
  liveLink: string;
  category: string[];
  demomp4: Assets;
  demowebm: Assets;
}

export interface ProjectsProps {
  projects: ProjectProps[];
}
