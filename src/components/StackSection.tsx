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
} from 'simple-icons';
import { Cloud, Database, Flower2, Layers, Smartphone, Timer, type LucideIcon } from 'lucide-react';
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
};

const GENERIC: Record<string, LucideIcon> = {
  sql: Database,
  drf: Layers,
  celerybeat: Timer,
  flower: Flower2,
  azure: Cloud,
  reactnative: Smartphone,
};

function ChipIcon({ id, size = 18 }: { id: string; size?: number }) {
  const Lucide = GENERIC[id];
  if (Lucide) {
    return <Lucide size={size} strokeWidth={1.75} className="shrink-0" aria-hidden />;
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className="shrink-0">
      <path d={BRAND[id]} />
    </svg>
  );
}

export function StackSection() {
  return (
    <section id="stack">
      <div className="pt-6">
        <h2 className="mb-6 -ml-[2px] font-serif text-[24px] font-normal tracking-tight text-[#222222] dark:text-[#f0ede7]">
          {content.stackHeading}
        </h2>

        {content.stack.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-2.5 border-b border-[#ece7e1] py-3.5 last:border-b-0 sm:flex-row sm:items-center sm:gap-6 dark:border-[#2a2620]"
          >
            <span className="w-36 shrink-0 font-mono text-xs tracking-wider text-[#847e78] dark:text-[#9a948b]">
              {row.label}
            </span>

            <div className="flex flex-1 flex-wrap gap-1.5">
              {row.items.map((item) => (
                <div
                  key={item.name}
                  aria-label={item.name}
                  tabIndex={0}
                  className="inline-flex items-center gap-1 rounded-md border border-dashed border-[#e8e4de] px-2 py-0.5 text-[11.5px] text-[#7a746e] transition-colors duration-200 hover:border-[#d8d2cb] hover:text-[#111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 dark:border-[#2e2a24] dark:text-[#9d978e] dark:hover:border-[#4a453b] dark:hover:text-[#f2efe9] dark:focus-visible:ring-white/10"
                >
                  <ChipIcon id={item.icon} size={13} />
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
