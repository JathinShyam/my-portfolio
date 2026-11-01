import {
  siPython,
  siDjango,
  siCelery,
  siRedis,
  siPostgresql,
  siDocker,
  siKubernetes,
  siPrometheus,
  siTypescript,
  siExpo,
  siAndroid,
  siKotlin,
  siJetpackcompose,
  siReact,
  siGithubactions,
  siOpenjdk,
  siSpringboot,
  siNextdotjs,
  siApachekafka,
  siRabbitmq,
  siGrafana,
} from 'simple-icons';
import { BrainCircuit, Braces, Cloud, Container, Database, Gauge, Layers, Smartphone, type LucideIcon } from 'lucide-react';

const BRAND: Record<string, string> = {
  Python: siPython.path,
  Django: siDjango.path,
  'Django/DRF': siDjango.path,
  Celery: siCelery.path,
  Redis: siRedis.path,
  PostgreSQL: siPostgresql.path,
  Docker: siDocker.path,
  Kubernetes: siKubernetes.path,
  Prometheus: siPrometheus.path,
  TypeScript: siTypescript.path,
  Expo: siExpo.path,
  Android: siAndroid.path,
  Kotlin: siKotlin.path,
  'Jetpack Compose': siJetpackcompose.path,
  React: siReact.path,
  'React Native': siReact.path,
  'CI/CD': siGithubactions.path,
  Java: siOpenjdk.path,
  'Spring Boot': siSpringboot.path,
  'Next.js': siNextdotjs.path,
  Kafka: siApachekafka.path,
  RabbitMQ: siRabbitmq.path,
  Grafana: siGrafana.path,
  'TypeScript/JavaScript': siTypescript.path,
};

const GENERIC: Record<string, LucideIcon> = {
  Azure: Cloud,
  SQL: Database,
  'Django REST Framework': Layers,
  'Deep Learning': BrainCircuit,
  Testcontainers: Container,
  Micrometer: Gauge,
  'TypeScript/JavaScript': Braces,
};

function iconFor(tag: string): { kind: 'brand'; path: string } | { kind: 'lucide'; Icon: LucideIcon } | null {
  if (tag in BRAND) return { kind: 'brand', path: BRAND[tag] };
  if (tag in GENERIC) return { kind: 'lucide', Icon: GENERIC[tag] };
  return null;
}

export default function TagIcon({ tag, size = 16 }: { tag: string; size?: number }) {
  const icon = iconFor(tag);
  if (!icon) return null;
  if (icon.kind === 'lucide') {
    const Lucide = icon.Icon;
    return <Lucide size={size} strokeWidth={1.75} className="shrink-0" aria-hidden />;
  }
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden className="shrink-0">
      <path d={icon.path} />
    </svg>
  );
}
