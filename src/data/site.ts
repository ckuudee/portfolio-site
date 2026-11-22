// All the site's content lives here, so editing text never means touching layout code.
import type { ImageMetadata } from "astro";
import djqShot from "../assets/projects/durable-job-queue.png";
import ghdShot from "../assets/projects/github-discord-ci.svg";

export const site = {
  name: "Cody Hoang",
  title: "Software Engineer",
  tagline: "I build backend systems that keep working when things fail.",
  description:
    "Cody Hoang is a computer science senior at the University of Washington building reliable backend systems. Projects, experience, and resume.",
  links: {
    github: "https://github.com/ckuudee",
    linkedin: "https://www.linkedin.com/in/codyhoang/",
    resume: "https://www.resume.lol/share/hb03ict",
    email: "codyhoang2005@gmail.com",
  },
};

export const about: string[] = [
  "I'm a computer science senior at the University of Washington, graduating in June 2027, and I'm looking for a full-time entry-level software engineering role.",
  "I'm drawn to backend work where the hard part is the failure cases: crashed workers, retries, duplicate deliveries. My recent projects are built around those cases and tested by trying to break them.",
  "I'm currently a software engineering intern at BlackDogData, a startup.",
];

export interface Project {
  name: string;
  repo: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image: { src: ImageMetadata; alt: string };
  /** Optional hover demo (desktop only). Put files in public/demos/ and set paths like "/demos/name.webm". */
  video?: { webm?: string; mp4?: string };
}

export const projects: Project[] = [
  {
    name: "durable-job-queue",
    repo: "https://github.com/ckuudee/durable-job-queue",
    summary:
      "A background job queue for Node.js where jobs survive crashes, failed jobs retry with backoff, and the system reports what it's doing. SQLite for one machine, PostgreSQL for many, behind one storage interface.",
    highlights: [
      "Leases with fencing tokens: only a job's current holder can record its result, even after a worker stalls and the job is re-claimed",
      "Retries with exponential backoff and jitter, a dead-letter queue, idempotency keys, and cron jobs that stay exactly-once across many schedulers",
      "349 tests in CI, with PostgreSQL tested against a real server, and a live metrics dashboard",
      "An adversarial test pass found 8 real bugs; load-test work (in progress) found 2 more: claims slowing as the backlog grew, and a durability gap. All fixed.",
    ],
    tech: ["TypeScript", "Node.js", "PostgreSQL", "SQLite", "Vitest", "GitHub Actions"],
    image: {
      src: djqShot,
      alt: "The queue's web dashboard: per-queue counts of ready, scheduled, running, stalled, completed and dead jobs, throughput sparklines, and a dead-letter table with each job's last error.",
    },
    // video: { webm: "/demos/durable-job-queue.webm", mp4: "/demos/durable-job-queue.mp4" },
  },
  {
    name: "github-discord-ci",
    repo: "https://github.com/ckuudee/github-discord-ci",
    summary:
      "An Express service that receives GitHub push webhooks and posts color-coded Discord alerts, built to get the easy-to-miss parts of webhook handling right.",
    highlights: [
      "Authenticates every request with HMAC-SHA256 over the raw body, compared in constant time",
      "Deduplicates redelivered webhooks by delivery ID, and evicts failed sends so a manual retry still goes through",
      "Replies to GitHub immediately and sends to Discord asynchronously, so a slow Discord can't cause a webhook timeout",
      "15 tests with Node's built-in runner, run in CI",
    ],
    tech: ["JavaScript", "Node.js", "Express", "GitHub Actions"],
    image: {
      src: ghdShot,
      alt: "Diagram of the request flow: GitHub push, signature check, duplicate check, 202 reply to GitHub, then the Discord message.",
    },
  },
];

export interface Job {
  role: string;
  org: string;
  dates: string;
  description?: string;
  tech?: string[];
}

export const experience: Job[] = [
  {
    role: "Software Engineering Intern",
    org: "BlackDogData (startup)",
    dates: "Apr 2026 – Present",
    description:
      "Building an AI assistant that lets buyers on the company's data marketplace assemble custom datasets in plain English, and a privacy-filtered data-upload flow for its iOS app. Full-stack TypeScript (React, Node/Express) and native Swift.",
    tech: ["TypeScript", "React", "Node.js", "Express", "MySQL", "Claude API", "Swift", "SwiftUI"],
  },
];

export const education = {
  school: "University of Washington, Seattle",
  detail: "Computer Science · Expected June 2027",
};
