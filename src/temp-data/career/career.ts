import type { Career } from "@/types/career";

export const careers: Career[] = [
  {
    id: 1,
    title: "New Environmental Scientist",
    department: "Environmental Laboratory",
    location: "Singapore",
    employmentType: "Full Time",
    experience: "2+ Years",

    overview:
      "Conduct laboratory testing and environmental sample analysis while maintaining quality standards.",

    responsibilities: [
      "Perform laboratory testing",
      "Prepare technical reports",
      "Maintain laboratory equipment",
      "Follow ISO procedures",
    ],

    requirements: [
      "Bachelor's Degree in Chemistry or related field",
      "Knowledge of laboratory equipment",
      "Strong analytical skills",
    ],
  },

  {
    id: 2,
    title: "Environmental Engineer",
    department: "Consultancy",
    location: "Malaysia",
    employmentType: "Full Time",
    experience: "3+ Years",

    overview:
      "Support environmental consultancy projects and compliance assessments.",

    responsibilities: [
      "Conduct site assessments",
      "Prepare environmental reports",
      "Communicate with clients",
    ],

    requirements: [
      "Bachelor's Degree in Environmental Engineering",
      "Excellent communication skills",
      "Project management experience",
    ],
  },

  {
    id: 3,
    title: "Sales Executive",
    department: "Business Development",
    location: "Singapore",
    employmentType: "Full Time",
    experience: "1+ Year",

    overview:
      "Develop relationships with clients and promote Axiom Laboratory services.",

    responsibilities: [
      "Meet prospective clients",
      "Prepare quotations",
      "Maintain customer relationships",
    ],

    requirements: [
      "Sales experience",
      "Excellent communication",
      "Willingness to travel",
    ],
  },
];