import type { Metadata } from "next";
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "분석",
};

const metrics = [
  {
    title: "페이지뷰",
    value: "84,231",
    change: "+18.3%",
    trend: "up",
    icon: TrendingUp,
    desc: "지난주 대비",
  },
  {
    title: "신규 방문자",
    value: "3,842",
    change: "+6.1%",
    trend: "up",
    icon: Users,
    desc: "지난주 대비",
  },
  {
    title: "전환율",
    value: "4.6%",
    change: "-0.8%",
    trend: "down",
    icon: TrendingDown,
    desc: "지난주 대비",
  },
  {
    title: "평균 주문액",
    value: "₩128,400",
    change: "+11.2%",
    trend: "up",
    icon: DollarSign,
    desc: "지난주 대비",
  },
];

const topPages = [
  { path: "/", title: "홈", views: "24,182", bounce: "32%" },
  { path: "/about", title: "소개", views: "8,431", bounce: "41%" },
  { path: "/dashboard", title: "대시보드", views: "6,204", bounce: "22%" },
  { path: "/ui", title: "UI 컴포넌트", views: "5,891", bounce: "27%" },
  { path: "/dashboard/settings", title: "설정", views: "2,104", bounce: "18%" },
];

const trafficSources = [
  { source: "자연 검색", visitors: "34,201", share: "40.6%" },
  { source: "직접 유입", visitors: "22,841", share: "27.1%" },
  { source: "소셜 미디어", visitors: "14,302", share: "17.0%" },
  { source: "추천 링크", visitors: "8,129", share: "9.7%" },
  { source: "이메일", visitors: "4,758", share: "5.6%" },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="분석"
        description="트래픽 및 사용자 행동 분석 데이터입니다."
      />

      {/* 핵심 지표 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {metric.title}
              </CardTitle>
              <div className="bg-muted flex size-8 items-center justify-center rounded-lg">
                <metric.icon className="text-muted-foreground size-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <Badge
                  variant={metric.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {metric.change}
                </Badge>
                <span className="text-muted-foreground text-xs">{metric.desc}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 상세 분석 탭 */}
      <Tabs defaultValue="pages">
        <TabsList>
          <TabsTrigger value="pages">페이지별</TabsTrigger>
          <TabsTrigger value="sources">유입 경로</TabsTrigger>
        </TabsList>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <CardTitle>인기 페이지</CardTitle>
              <CardDescription>조회수 기준 상위 페이지 목록입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                <div className="text-muted-foreground grid grid-cols-3 pb-2 text-xs font-medium">
                  <span>페이지</span>
                  <span className="text-center">조회수</span>
                  <span className="text-right">이탈률</span>
                </div>
                {topPages.map((page) => (
                  <div
                    key={page.path}
                    className="grid grid-cols-3 items-center py-3 text-sm"
                  >
                    <div>
                      <p className="font-medium">{page.title}</p>
                      <p className="text-muted-foreground text-xs">{page.path}</p>
                    </div>
                    <p className="text-center font-medium">{page.views}</p>
                    <p className="text-right">{page.bounce}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources">
          <Card>
            <CardHeader>
              <CardTitle>유입 경로</CardTitle>
              <CardDescription>트래픽 소스별 방문자 현황입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                <div className="text-muted-foreground grid grid-cols-3 pb-2 text-xs font-medium">
                  <span>소스</span>
                  <span className="text-center">방문자</span>
                  <span className="text-right">비율</span>
                </div>
                {trafficSources.map((item) => (
                  <div
                    key={item.source}
                    className="grid grid-cols-3 items-center py-3 text-sm"
                  >
                    <p className="font-medium">{item.source}</p>
                    <p className="text-center">{item.visitors}</p>
                    <div className="flex items-center justify-end gap-2">
                      <div className="bg-muted h-1.5 w-16 overflow-hidden rounded-full">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: item.share }}
                        />
                      </div>
                      <span className="text-muted-foreground w-10 text-right text-xs">
                        {item.share}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 차트 플레이스홀더 */}
      <Card>
        <CardHeader>
          <CardTitle>시계열 차트</CardTitle>
          <CardDescription>
            실제 차트는 recharts 등의 라이브러리를 연결하여 사용하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Skeleton className="h-48 w-full rounded-lg" />
          <div className="flex gap-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-20" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
