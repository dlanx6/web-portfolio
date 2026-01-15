export interface Project {
  title: string,
  description: string,
  links: {
    web?: string,
    repo: string,
  },
  technologies: string[],
  features: string[],
  thumbnail: string,
}