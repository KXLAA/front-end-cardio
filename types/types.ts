export interface Video {
  url: string;
}

export interface ProjectProps {
  id: string;
  name: string;
  codeLink: string;
  liveLink: string;
  category: string[];
  demomp4: Video;
  demowebm: Video;
}

export interface ProjectsProps {
  projects: ProjectProps[];
}
