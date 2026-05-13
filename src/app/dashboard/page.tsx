import type { Metadata } from "next";
import { Users, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "@/components/layout/page-header";

export const metadata: Metadata = {
  title: "대시보드",
};

const stats = [
  {
    title: "전체 사용자",
    value: "12,489",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    desc: "지난달 대비",
  },
  {
    title: "월간 매출",
    value: "₩2,350만",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    desc: "지난달 대비",
  },
  {
    title: "신규 주문",
    value: "1,284",
    change: "-3.1%",
    trend: "down",
    icon: ShoppingCart,
    desc: "지난달 대비",
  },
  {
    title: "성장률",
    value: "23.4%",
    change: "+4.6%",
    trend: "up",
    icon: TrendingUp,
    desc: "전년 동기 대비",
  },
];

const recentActivities = [
  { action: "새 사용자 가입", target: "김민준", time: "2분 전" },
  { action: "주문 완료", target: "주문 #1892", time: "15분 전" },
  { action: "리뷰 작성", target: "이서연", time: "1시간 전" },
  { action: "결제 완료", target: "₩145,000", time: "2시간 전" },
  { action: "상품 등록", target: "신상품 12종", time: "3시간 전" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="대시보드"
        description="프로젝트 현황을 한눈에 확인하세요."
      />

      {/* 통계 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="bg-muted flex size-8 items-center justify-center rounded-lg">
                <stat.icon className="text-muted-foreground size-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <Badge
                  variant={stat.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <span className="text-muted-foreground text-xs">{stat.desc}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 최근 활동 + 스켈레톤 예시 */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>최근 발생한 이벤트 목록입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col divide-y">
              {recentActivities.map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-muted-foreground">{activity.target}</p>
                  </div>
                  <span className="text-muted-foreground text-xs shrink-0">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skeleton 로딩 상태 예시 */}
        <Card>
          <CardHeader>
            <CardTitle>차트 영역</CardTitle>
            <CardDescription>
              데이터 로딩 중일 때 Skeleton 컴포넌트 활용 예시입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <p className="text-muted-foreground mt-2 text-center text-xs">
              실제 차트 라이브러리(recharts 등)를 연결하여 사용하세요.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
