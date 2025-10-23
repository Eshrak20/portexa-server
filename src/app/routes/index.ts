import { Router } from "express";
import { BlogRoutes } from "../modules/blog/blog.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { AboutRoutes } from "../modules/about/about.route";
import { EducationRoutes } from "../modules/education/education.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { SocialLinkRoutes } from "../modules/socialLink/socialLink.route";
import { TestimonialRoutes } from "../modules/testimonial/testimonial.route";
import { MessageRoutes } from "../modules/message/message.route";
import { LikeRoutes } from "../modules/like/like.route";
import { CommentRoutes } from "../modules/comment/comment.route";
import { ViewRoutes } from "../modules/view/view.route";

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
  {
    path: "/social-links",
    route: SocialLinkRoutes,
  },
  {
    path: "/testimonials",
    route: TestimonialRoutes,
  },
  {
    path: "/message",
    route: MessageRoutes,
  },
  {
    path: "/likes",
    route: LikeRoutes,
  },
  {
    path: "/comments",
    route: CommentRoutes,
  },
  {
    path: "/views",
    route: ViewRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
