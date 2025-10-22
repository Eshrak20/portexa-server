import { Router } from "express";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { AboutRoutes } from "../modules/about/about.route";
import { EducationRoutes } from "../modules/education/education.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
  {
    path: "/about",
    route: AboutRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
