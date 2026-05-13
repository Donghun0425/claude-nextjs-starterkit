import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "소개",
};

const techCategories = [
  {
    title: "프레임워크 & 언어",
    items: [
      { name: "Next.js 16", desc: "App Router, React Compiler, Turbopack 기본값" },
      { name: "React 19", desc: "최신 React 기능 지원" },
      { name: "TypeScript 5", desc: "엄격한 타입 검사" },
    ],
  },
  {
    title: "스타일링 & UI",
    items: [
      { name: "TailwindCSS v4", desc: "@theme 인라인 설정, CSS-first 방식" },
      { name: "ShadcnUI v4 (base-nova)", desc: "@base-ui/react 기반 headless 컴포넌트" },
      { name: "lucide-react", desc: "아름다운 오픈소스 아이콘 라이브러리" },
    ],
  },
  {
    title: "상태 & 폼",
    items: [
      { name: "react-hook-form", desc: "성능 중심의 폼 라이브러리" },
      { name: "zod", desc: "TypeScript-first 스키마 검증" },
      { name: "@hookform/resolvers", desc: "react-hook-form + zod 통합" },
    ],
  },
  {
    title: "유틸리티",
    items: [
      { name: "next-themes", desc: "SSR 안전한 다크/라이트 모드 전환" },
      { name: "sonner", desc: "ShadcnUI 공식 토스트 알림" },
      { name: "tw-animate-css", desc: "TailwindCSS 기반 애니메이션" },
    ],
  },
];

const pages = [
  {
    title: "랜딩 페이지",
    href: "/",
    desc: "히어로 섹션, 기능 소개, CTA가 포함된 메인 페이지",
    tags: ["Badge", "Card", "Button"],
  },
  {
    title: "소개 페이지",
    href: "/about",
    desc: "기술스택 소개와 프로젝트 설명 페이지",
    tags: ["Badge", "Card", "Separator"],
  },
  {
    title: "대시보드",
    href: "/dashboard",
    desc: "ShadcnUI Sidebar를 활용한 관리자 레이아웃",
    tags: ["Sidebar", "Card", "Skeleton"],
  },
  {
    title: "설정 폼",
    href: "/dashboard/settings",
    desc: "react-hook-form + zod를 활용한 폼 검증 예제",
    tags: ["Form", "Input", "Select", "Switch"],
  },
];

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container>
        <PageHeader
          title="스타터킷 소개"
          description="Next.js 16 기반의 모던 웹 스타터킷을 빠르게 시작하기 위한 모든 것이 준비되어 있습니다."
        >
          <Button
            nativeButton={false}
            render={
              <Link href="/dashboard">
                대시보드 보기
                <ArrowRight className="ml-2 size-4" />
              </Link>
            }
          />
        </PageHeader>

        <Separator className="mb-10" />

        {/* 개요 */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold">이 스타터킷에 대해</h2>
          <p className="text-muted-foreground leading-7">
            이 스타터킷은 새로운 웹 프로젝트를 시작할 때 반복적으로 수행하는 초기 설정 작업을
            없애기 위해 만들어졌습니다. 다크모드, 반응형 레이아웃, 폼 검증, 토스트 알림 등
            어떤 웹 프로젝트에서든 필요한 기능들이 검증된 라이브러리를 통해 미리 구성되어 있습니다.
          </p>
          <p className="text-muted-foreground mt-3 leading-7">
            &quot;바퀴를 재발명하지 말라&quot;는 원칙 아래, 커뮤니티에서 검증된 라이브러리만을 선택하여
            최소한의 추상화로 구성했습니다.
          </p>
        </section>

        {/* 기술스택 */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">기술스택</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {techCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex flex-col gap-0.5">
                      <Badge variant="secondary" className="w-fit">
                        {item.name}
                      </Badge>
                      <p className="text-muted-foreground pl-1 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 포함된 페이지 */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold">포함된 페이지</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pages.map((page) => (
              <Card
                key={page.href}
                className="transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{page.title}</CardTitle>
                    <Link
                      href={page.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </Link>
                  </div>
                  <CardDescription>{page.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {page.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 컴포넌트 계층 */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">컴포넌트 계층 구조</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    layer: "Layer 0",
                    title: "Foundation",
                    items: ["ThemeProvider", "Toaster", "TooltipProvider"],
                    color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
                  },
                  {
                    layer: "Layer 1",
                    title: "Layout",
                    items: ["Header", "Footer", "Container", "PageHeader"],
                    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                  {
                    layer: "Layer 2",
                    title: "UI Primitives",
                    items: ["Card", "Badge", "Button", "Input", "...20개"],
                    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                  },
                  {
                    layer: "Layer 3",
                    title: "Pages",
                    items: ["Landing", "About", "Dashboard", "Settings"],
                    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                  },
                ].map((l) => (
                  <div key={l.layer} className="flex flex-col gap-2">
                    <div className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${l.color}`}>
                      {l.layer}: {l.title}
                    </div>
                    <ul className="text-muted-foreground flex flex-col gap-1 pl-1 text-sm">
                      {l.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="text-muted-foreground/50">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </Container>
    </div>
  );
}
