export const profile = {
  name: "Adarsh Vijayakumar",
  title: "Java Full Stack Software Engineer",
  location: "Bengaluru, India",
  email: "adarsh.vijayakumar07@gmail.com",
  phone: "+91 9187051037",
  linkedIn: "https://www.linkedin.com/in/adarsh-vijayakumar-sde/",
  github: "https://github.com/adarsh-vijayakumar",
  medium: "https://medium.com/@adarsh.vijayakumar07",
  // Add the image to public/ and set this to its URL, e.g. "/profile.jpg".
  photo: "/profile.png" as string | null,
  summary: "Software Engineer with 5 years of US-based experience designing and building high-throughput microservices and event-driven systems across healthcare and retail domains. Proficient in Java, Spring Boot, Kafka, and AWS, with a strong focus on end-to-end API design, scalable data processing, and cloud deployment. Proven track record of engineering mission-critical platforms processing $180M+ in annual financial transactions across 70k+ active caseloads.",
};

export const experience = [
  {
    company: "UnitedHealth Group",
    role: "Software Engineer",
    location: "Chicago, IL",
    period: "March 2022 – Present",
    domain: "Healthcare",
    technologies: ["Java", "Spring Boot", "Kafka", "Angular", "AWS"],
    highlights: [
      "Designed, built, deployed, and supported Spring Boot REST APIs for the Income Withholding Order platform, integrating Kafka, Spring Batch, and MS SQL Server to automate employer notifications, payment tracking, and backend reconciliation.",
      "Designed and delivered a fingerprint-verification capability for the Provider Enrollment Portal using Kafka Streams, improving provider-data accuracy and strengthening identity-verification controls.",
      "Designed and delivered an automated ingestion workflow for genetic test results using REST APIs and batch processing, eliminating manual updates and reducing processing time for the Paternity module.",
      "Enhanced child support case-management screens using Angular and TypeScript, integrating REST APIs and implementing form validations for case-data updates.",
      "Deployed, monitored, and supported Child Support microservices on AWS using EC2, S3, and CloudWatch, improving application reliability and operational efficiency.",
    ],
  },
  {
    company: "JD Finish Line",
    role: "Software Development Engineer",
    location: "Chicago, IL",
    period: "July 2021 – February 2022",
    domain: "Retail",
    technologies: ["Spring Boot", "Java", "Docker", "Kubernetes", "Jenkins"],
    highlights: [
      "Designed and owned inbound Spring Boot microservices that ingested and processed large-scale product data from multiple source systems through REST APIs.",
      "Architected and implemented a high-throughput asynchronous processing layer using Java multithreading and concurrency, increasing data-ingestion performance by 70%.",
      "Designed and delivered a configurable validation framework for source-specific business rules, improving data quality and reducing downstream processing failures.",
      "Owned application containerization and deployment automation using Docker, Kubernetes, and Jenkins, streamlining releases and improving deployment consistency.",
    ],
  },
  {
    company: "Illinois Institute of Technology",
    role: "Research and Development Assistant",
    location: "Chicago, IL",
    period: "July 2020 – June 2021",
    domain: "Research & development",
    technologies: ["Spring Boot", "JPA", "Hibernate", "Maven"],
    highlights: [
      "Designed and built a centralized Spring Boot application using JPA and Hibernate to manage digital resources and improve search and retrieval workflows.",
      "Owned the development of role-based access control and version-history capabilities, enabling secure access and auditable content updates.",
      "Redesigned data-synchronization workflows across library segments using the Spring ecosystem and Maven, reducing latency by 30% and improving reliability during concurrent updates.",
    ],
  },
];

export const skillGroups = [
  { name: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "TypeScript"] },
  { name: "Libraries & frameworks", items: ["Spring Boot", "Spring Batch", "Spring Cloud", "JPA", "Hibernate", "Angular"] },
  { name: "Databases", items: ["MS SQL Server", "PostgreSQL", "Oracle DB", "MongoDB"] },
  { name: "Cloud & CI/CD", items: ["AWS", "EC2", "S3", "CloudWatch", "Docker", "Kubernetes", "Jenkins"] },
  { name: "Testing & tools", items: ["JUnit", "Mockito", "Cucumber", "Kafka", "Maven", "Git"] },
];

export type Project = {
  title: string;
  description: string;
  highlights?: { label: string; text: string }[];
  technologies: string[];
  github?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    title: "Java Multithreading & Concurrency",
    description: "A personal platform exploring core Java concurrency through standalone console examples. Demonstrates thread lifecycle, shared mutable state, thread pools, and producer-consumer coordination, with intentionally unsafe examples that make race conditions and deadlocks observable alongside coordinated implementations.",
    technologies: [],
    github: "https://github.com/adarsh-vijayakumar/Multithreading",
  },
  {
    title: "Data Structures & Algorithms Repository",
    description: "A comprehensive, growing personal archive tracking my technical problem-solving journey.",
    highlights: [
      { label: "Broad Coverage", text: "Solutions spanning arrays, linked lists, trees, graphs, dynamic programming, and core algorithms." },
      { label: "Code Quality", text: "Written with an emphasis on optimal asymptotic complexity and clean syntax." },
      { label: "Active Commitment", text: "Continuously updated with new solutions as I solve problems across various platforms." },
    ],
    technologies: [],
    github: "https://github.com/adarsh-vijayakumar/DSA-Solutions",
  },
];
