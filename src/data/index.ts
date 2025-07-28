import { frontendRoadmap } from "./frontend";
import { backendRoadmap } from "./backend";

export const allRoadmaps = [
  {
    id: "frontend",
    title: "نقشه راه فرانت‌اند",
    description: "مسیر یادگیری برای توسعه رابط کاربری",
    data: frontendRoadmap,
  },
  {
    id: "backend",
    title: "نقشه راه بک‌اند",
    description: "مسیر یادگیری برای توسعه سمت سرور",
    data: backendRoadmap,
  }
];
