import { useState } from 'react';
import {
  siPython,
  siGo,
  siTypescript,
  siJavascript,
  siOpenjdk,
  siKotlin,
  siDjango,
  siCelery,
  siPostgresql,
  siRedis,
  siDocker,
  siKubernetes,
  siPrometheus,
  siReact,
  siExpo,
  siStreamlit,
  siGit,
  siGithubactions,
  siLocust,
  siJetpackcompose,
  siSpringboot,
  siNextdotjs,
  siApachekafka,
  siRabbitmq,
  siGrafana,
} from 'simple-icons';
import { Activity, Cloud, Container, Database, Flower2, Gauge, Layers, Smartphone, Timer, type LucideIcon } from 'lucide-react';
import content from '@/data/content';

const BRAND: Record<string, string> = {
  python: siPython.path,
  go: siGo.path,
  typescript: siTypescript.path,
  javascript: siJavascript.path,
  java: siOpenjdk.path,
  kotlin: siKotlin.path,
  django: siDjango.path,
  celery: siCelery.path,
  postgresql: siPostgresql.path,
  redis: siRedis.path,
  docker: siDocker.path,
  kubernetes: siKubernetes.path,
  prometheus: siPrometheus.path,
  react: siReact.path,
  expo: siExpo.path,
  streamlit: siStreamlit.path,
  git: siGit.path,
  ghactions: siGithubactions.path,
  locust: siLocust.path,
  compose: siJetpackcompose.path,
  springboot: siSpringboot.path,
  nextjs: siNextdotjs.path,
  kafka: siApachekafka.path,
  rabbitmq: siRabbitmq.path,
  grafana: siGrafana.path,
};

const GENERIC: Record<string, LucideIcon> = {
  sql: Database,
  drf: Layers,
  celerybeat: Timer,
  flower: Flower2,
  azure: Cloud,
  reactnative: Smartphone,
  testcontainers: Container,
  micrometer: Gauge,
  typescriptjavascript: Layers,
  activity: Activity,
};

function ChipIcon({ id, size = 18 }: { id: string; size?: number }) {
  const Lucide = GENERIC[id];
  if (Lucide) {
    return <Lucide size={size} strokeWidth={1.75} className="shrink-0" aria-hidden />;
  }

  const path = BRAND[id];
  if (!path) return <Layers size={size} strokeWidth={1.75} className="shrink-0" aria-hidden />;

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className="shrink-0">
      <path d={path} />
    </svg>
  );
}

export function StackSection() {
  const [selected, setSelected] = useState(content.stack[0].label);

  const visibleRow = content.stack.find((row) => row.label === selected) ?? content.stack[0];

  return (
    <section id="stack" className="flex flex-col gap-6">
      <div role="group" aria-label="Skill categories" className="flex flex-wrap gap-2">
        {content.stack.map((row) => {
          const active = row.label === visibleRow.label;
          return (
            <button
              key={row.label}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(row.label)}
              className={`border px-4 py-2 text-[13px] font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#151210] ${
                active
                  ? 'border-[#18181b] bg-[#18181b] text-white dark:border-[#fafafa] dark:bg-[#fafafa] dark:text-[#18181b]'
                  : 'border-[#d4d4d8] bg-white text-[#3f3f46] hover:border-[#2563eb] hover:text-[#2563eb] dark:border-[#3f3f46] dark:bg-[#1c1c1f] dark:text-[#d4d4d8] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]'
              }`}
            >
              {row.label}
            </button>
          );
        })}
      </div>

      <ul key={visibleRow.label} className="flex flex-wrap gap-2">
        {visibleRow.items.map((item) => (
          <li
            key={item.name}
            className="inline-flex items-center gap-2 border border-[#e4e4e7] bg-[#f4f4f5] px-3 py-1.5 text-[13px] text-[#27272a] transition-colors duration-200 hover:border-[#2563eb] hover:text-[#2563eb] dark:border-[#27272a] dark:bg-[#18181b] dark:text-[#e4e4e7] dark:hover:border-[#60a5fa] dark:hover:text-[#60a5fa]"
          >
            <ChipIcon id={item.icon} size={14} />
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
