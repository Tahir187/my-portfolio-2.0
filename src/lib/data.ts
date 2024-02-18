import React from "react";
import exercise from "../../public/exercise.png";
import gallery from "../../public/gallery.png";
import { LuGraduationCap } from "react-icons/lu";

export const projectsData = [
    {
        title: "Exercise Tracker",
        description:
          "I worked as a full-stack developer on this project which final project of our Boot Camp from Contour Software.",
        tags: ["React", "Node.JS", "MongoDB", "Express.JS", "TailwindCSS"],
        imageUrl: exercise,
      },
    {
        title: "Exercise Tracker",
        description:
          "I worked as a full-stack developer on this project which final project of our Boot Camp from Contour Software.",
        tags: ["React", "Node.JS", "MongoDB", "Express.JS", "TailwindCSS"],
        imageUrl: exercise,
      },
    {
        title: "Exercise Tracker",
        description:
          "I worked as a full-stack developer on this project which final project of our Boot Camp from Contour Software.",
        tags: ["React", "Node.JS", "MongoDB", "Express.JS", "TailwindCSS"],
        imageUrl: exercise,
      },
    {
        title: "Exercise Tracker",
        description:
          "I worked as a full-stack developer on this project which final project of our Boot Camp from Contour Software.",
        tags: ["React", "Node.JS", "MongoDB", "Express.JS", "TailwindCSS"],
        imageUrl: exercise,
      },
    {
        title: "Image Gallery",
        description:
          "I worked as a full-stack developer on this project which is from PIAIC Web 3.0 course.",
        tags: ["React", "Next.JS", "Cloudinary", "TailwindCSS"],
        imageUrl: gallery,
      },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: "Pakistan, Karachi, Contour Software",
    description: "I graduated after 3 months of studying in MERN Stack technology, from reputed software house in karachi.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
]