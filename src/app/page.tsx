import Link from "next/link";
import {
  Zap,
  Layers,
  Palette,
  Code2,
  Shield,
  Rocket,
  ArrowRight,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Container } from "@/components/layout/container";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description:
      "최신 Next.js 16의 App Router를 기반으로 서버 컴포넌트, 스트리밍, React Compiler를 완벽 지원합니다.",
  },
  {
    icon: Palette,
    title: "TailwindCSS v4 + ShadcnUI",
    description:
      "TailwindCSS v4의 새로운 @theme 인라인 설정과 ShadcnUI base-nova 스타일로 아름다운 UI를 빠르게 구성하세요.",
  },
  {
    icon: Layers,
    title: "다크모드 지원",
    description:
      "next-themes를 활용한 SSR 안전한 다크모드 전환을 지원합니다. 시스템 설정을 자동으로 감지합니다.",
  },
  {
    icon: Code2,
    title: "TypeScript 완벽 지원",
    description:
      "엄격한 TypeScript 설정으로 타입 안전성을 보장합니다. Zod 스키마 검증과 react-hook-form이 통합되어 있습니다.",
  },
  {
    icon: Shield,
    title: "폼 검증 (react-hook-form + zod)",
    description:
      "ShadcnUI Form 컴포넌트와 react-hook-form, zod를 통합하여 타입 안전한 폼 검증을 제공합니다.",
  },
  {
    icon: Rocket,
    title: "즉시 사용 가능한 레이아웃",
    description:
      "Header, Footer, Sidebar 기반 Dashboard 레이아웃이 미리 구성되어 있어 바로 개발을 시작할 수 있습니다.",
  },
];

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "TailwindCSS v4",
  "ShadcnUI v4",
  "lucide-react",
  "next-themes",
  "react-hook-form",
  "zod",
  "sonner",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary" className="text-sm">
            🚀 Next.js 16 + React 19 기반
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            빠르게 시작하는
            <br />
            <span className="text-primary">모던 웹 스타터킷</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            최신 기술스택으로 구성된 프로덕션 레디 스타터킷입니다. 복잡한 설정 없이
            바로 개발을 시작하세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              size="lg"
              render={
                <Link href="/dashboard">
                  대시보드 보기
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              }
            />
            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              render={<Link href="/about">더 알아보기</Link>}
            />
          </div>

          {/* 기술스택 배지 */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* 기능 소개 섹션 */}
      <section className="bg-muted/40 py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              스타터킷이 제공하는 것들
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              프로젝트 초기 설정에 드는 시간을 최소화하고, 비즈니스 로직에 집중하세요.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20">
        <Container>
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
            <p className="mt-3 text-lg opacity-90">
              이미 모든 설정이 완료되어 있습니다. 코드를 수정하고 배포하기만 하면 됩니다.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                nativeButton={false}
                variant="secondary"
                size="lg"
                render={
                  <Link href="/dashboard">
                    <Rocket className="mr-2 size-4" />
                    대시보드 시작
                  </Link>
                }
              />
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                render={
                  <Link
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 size-4" />
                    GitHub 보기
                  </Link>
                }
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
