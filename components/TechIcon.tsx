import type { IconType } from "react-icons";
import {
  SiCss,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Monochrome (currentColor) icons for tech-stack pills.
// Unmapped tools fall back to a neutral code glyph.
const iconMap: Record<string, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  react: SiReact,
  "node.js": SiNodedotjs,
  node: SiNodedotjs,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  sql: SiMysql,
  mysql: SiMysql,
  java: SiOpenjdk,
  "visual basic": SiDotnet,
  figma: SiFigma,
  html: SiHtml5,
  css: SiCss,
  php: SiPhp,
  express: SiExpress,
  "express.js": SiExpress,
  "tailwind css": SiTailwindcss,
  tailwind: SiTailwindcss,
};

function FallbackGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" />
    </svg>
  );
}

export default function TechIcon({
  name,
  className = "h-3.5 w-3.5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name.toLowerCase()];
  if (!Icon) {
    return <FallbackGlyph className={className} />;
  }
  return <Icon className={className} aria-hidden="true" />;
}
