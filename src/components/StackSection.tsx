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
              className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#151210] ${
                active
                  ? 'border-[#2563eb] bg-[#2563eb] text-white shadow-sm dark:border-[#3b82f6] dark:bg-[#3b82f6]'
                  : 'border-[#d8d2cb] bg-white text-[#3a3530] hover:border-[#2563eb] hover:text-[#2563eb] dark:border-[#3a352c] dark:bg-[#1c1913] dark:text-[#d7d2ca] dark:hover:border-[#93c5fd] dark:hover:text-[#93c5fd]'
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
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#e8e4de] bg-white px-2.5 py-1 text-[13px] text-[#3a3530] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors duration-200 hover:border-[#2563eb] hover:text-[#2563eb] dark:border-[#332f28] dark:bg-[#1c1913] dark:text-[#d7d2ca] dark:hover:border-[#93c5fd] dark:hover:text-[#93c5fd]"
          >
            <ChipIcon id={item.icon} size={14} />
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
