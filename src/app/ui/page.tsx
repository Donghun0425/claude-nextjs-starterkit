"use client"

import { toast } from "sonner"
import { Bell, Mail, Settings, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Container } from "@/components/layout/container"
import { PageHeader } from "@/components/layout/page-header"
import { ComponentPreview } from "@/components/showcase/component-preview"

export default function UIShowcasePage() {
  return (
    <div className="py-12">
      <Container>
        <PageHeader
          title="UI 컴포넌트"
          description="스타터킷에 포함된 ShadcnUI 컴포넌트 미리보기와 사용 방법입니다."
        />

        <Tabs defaultValue="basic">
          <TabsList className="mb-8 w-full sm:w-auto">
            <TabsTrigger value="basic">기본 요소</TabsTrigger>
            <TabsTrigger value="form">입력 폼</TabsTrigger>
            <TabsTrigger value="layout">레이아웃</TabsTrigger>
            <TabsTrigger value="feedback">피드백</TabsTrigger>
          </TabsList>

          {/* ─────────────────────────────────────────── */}
          {/* 탭 1: 기본 요소                              */}
          {/* ─────────────────────────────────────────── */}
          <TabsContent value="basic">
            <div className="grid gap-6">
              {/* Button — variants */}
              <ComponentPreview
                title="Button — 변형(Variant)"
                description="6가지 버튼 스타일. variant prop으로 선택합니다."
                code={`import { Button } from "@/components/ui/button"

<Button variant="default">기본</Button>
<Button variant="secondary">보조</Button>
<Button variant="outline">아웃라인</Button>
<Button variant="ghost">고스트</Button>
<Button variant="destructive">삭제</Button>
<Button variant="link">링크</Button>`}
              >
                <Button variant="default">기본</Button>
                <Button variant="secondary">보조</Button>
                <Button variant="outline">아웃라인</Button>
                <Button variant="ghost">고스트</Button>
                <Button variant="destructive">삭제</Button>
                <Button variant="link">링크</Button>
              </ComponentPreview>

              {/* Button — sizes */}
              <ComponentPreview
                title="Button — 크기(Size)"
                description="xs부터 lg까지 4가지 크기, 아이콘 전용 크기도 지원합니다."
                code={`<Button size="xs">xs</Button>
<Button size="sm">sm</Button>
<Button size="default">기본</Button>
<Button size="lg">lg</Button>
<Button size="icon"><Bell /></Button>`}
              >
                <Button size="xs">xs</Button>
                <Button size="sm">sm</Button>
                <Button size="default">기본</Button>
                <Button size="lg">lg</Button>
                <Button size="icon"><Bell className="size-4" /></Button>
              </ComponentPreview>

              {/* Badge */}
              <ComponentPreview
                title="Badge — 변형(Variant)"
                description="상태 표시, 라벨, 카테고리 등에 활용하는 뱃지 컴포넌트."
                code={`import { Badge } from "@/components/ui/badge"

<Badge variant="default">기본</Badge>
<Badge variant="secondary">보조</Badge>
<Badge variant="destructive">위험</Badge>
<Badge variant="outline">아웃라인</Badge>
<Badge variant="ghost">고스트</Badge>`}
              >
                <Badge variant="default">기본</Badge>
                <Badge variant="secondary">보조</Badge>
                <Badge variant="destructive">위험</Badge>
                <Badge variant="outline">아웃라인</Badge>
                <Badge variant="ghost">고스트</Badge>
              </ComponentPreview>

              {/* Avatar */}
              <ComponentPreview
                title="Avatar"
                description="사용자 프로필 이미지 또는 이니셜을 표시합니다. AvatarGroup으로 여러 아바타를 겹쳐서 보여줄 수 있습니다."
                code={`import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "@/components/ui/avatar"

// 기본 아바타
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
  <AvatarFallback>홍</AvatarFallback>
</Avatar>

// 그룹 아바타
<AvatarGroup>
  <Avatar><AvatarFallback>김</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>이</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>박</AvatarFallback></Avatar>
</AvatarGroup>`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                      <AvatarFallback>홍</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>이</AvatarFallback>
                    </Avatar>
                  </div>
                  <AvatarGroup>
                    <Avatar><AvatarFallback>김</AvatarFallback></Avatar>
                    <Avatar><AvatarFallback>이</AvatarFallback></Avatar>
                    <Avatar><AvatarFallback>박</AvatarFallback></Avatar>
                    <Avatar><AvatarFallback>최</AvatarFallback></Avatar>
                  </AvatarGroup>
                </div>
              </ComponentPreview>

              {/* Skeleton */}
              <ComponentPreview
                title="Skeleton"
                description="콘텐츠가 로딩 중일 때 보여주는 플레이스홀더 컴포넌트."
                code={`import { Skeleton } from "@/components/ui/skeleton"

// 텍스트 줄
<Skeleton className="h-4 w-48" />
<Skeleton className="h-4 w-32" />

// 카드 형태
<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-24" />
  </div>
</div>`}
                previewClassName="flex-col gap-4"
              >
                <div className="flex flex-col gap-3 w-64">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </TabsContent>

          {/* ─────────────────────────────────────────── */}
          {/* 탭 2: 입력 폼                               */}
          {/* ─────────────────────────────────────────── */}
          <TabsContent value="form">
            <div className="grid gap-6">
              {/* Input */}
              <ComponentPreview
                title="Input"
                description="텍스트 입력 필드. type, placeholder, disabled 등 모든 HTML input 속성을 지원합니다."
                code={`import { Input } from "@/components/ui/input"

<Input placeholder="텍스트를 입력하세요" />
<Input type="email" placeholder="이메일 주소" />
<Input disabled placeholder="비활성화 상태" />`}
                previewClassName="flex-col gap-3"
              >
                <div className="flex w-full max-w-xs flex-col gap-3">
                  <Input placeholder="텍스트를 입력하세요" />
                  <Input type="email" placeholder="이메일 주소" />
                  <Input disabled placeholder="비활성화 상태" />
                </div>
              </ComponentPreview>

              {/* Textarea */}
              <ComponentPreview
                title="Textarea"
                description="여러 줄 텍스트 입력. rows prop으로 기본 높이를 지정할 수 있습니다."
                code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="내용을 입력하세요..." rows={4} />`}
              >
                <Textarea
                  placeholder="내용을 입력하세요..."
                  rows={4}
                  className="w-full max-w-xs"
                />
              </ComponentPreview>

              {/* Select */}
              <ComponentPreview
                title="Select"
                description="드롭다운 선택 컴포넌트. SelectContent 안에 SelectItem으로 옵션을 구성합니다."
                code={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

<Select>
  <SelectTrigger className="w-48">
    <SelectValue placeholder="옵션 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">사과</SelectItem>
    <SelectItem value="banana">바나나</SelectItem>
    <SelectItem value="orange">오렌지</SelectItem>
  </SelectContent>
</Select>`}
              >
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="옵션 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">사과</SelectItem>
                    <SelectItem value="banana">바나나</SelectItem>
                    <SelectItem value="orange">오렌지</SelectItem>
                  </SelectContent>
                </Select>
              </ComponentPreview>

              {/* Checkbox */}
              <ComponentPreview
                title="Checkbox"
                description="체크박스. Label과 함께 사용하면 클릭 영역이 넓어집니다."
                code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">약관에 동의합니다</Label>
</div>
<div className="flex items-center gap-2">
  <Checkbox id="checked" defaultChecked />
  <Label htmlFor="checked">선택됨</Label>
</div>
<div className="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">비활성화</Label>
</div>`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">약관에 동의합니다</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="checked" defaultChecked />
                    <Label htmlFor="checked">선택됨</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled">비활성화</Label>
                  </div>
                </div>
              </ComponentPreview>

              {/* RadioGroup */}
              <ComponentPreview
                title="RadioGroup"
                description="라디오 버튼 그룹. 여러 옵션 중 하나만 선택할 때 사용합니다."
                code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">옵션 1</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">옵션 2</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option3" id="r3" />
    <Label htmlFor="r3">옵션 3</Label>
  </div>
</RadioGroup>`}
              >
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">옵션 1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">옵션 2</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">옵션 3</Label>
                  </div>
                </RadioGroup>
              </ComponentPreview>

              {/* Switch */}
              <ComponentPreview
                title="Switch"
                description="토글 스위치. 켜기/끄기 상태를 전환합니다."
                code={`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">알림 활성화</Label>
</div>
<div className="flex items-center gap-2">
  <Switch id="on" defaultChecked />
  <Label htmlFor="on">켜짐 상태</Label>
</div>
<div className="flex items-center gap-2">
  <Switch id="off-disabled" disabled />
  <Label htmlFor="off-disabled">비활성화</Label>
</div>`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">알림 활성화</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="on" defaultChecked />
                    <Label htmlFor="on">켜짐 상태</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="off-disabled" disabled />
                    <Label htmlFor="off-disabled">비활성화</Label>
                  </div>
                </div>
              </ComponentPreview>
            </div>
          </TabsContent>

          {/* ─────────────────────────────────────────── */}
          {/* 탭 3: 레이아웃                              */}
          {/* ─────────────────────────────────────────── */}
          <TabsContent value="layout">
            <div className="grid gap-6">
              {/* Card */}
              <ComponentPreview
                title="Card"
                description="콘텐츠를 그룹화하는 카드 컴포넌트. Header, Title, Description, Content, Footer로 구성됩니다."
                code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card className="w-72">
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드에 대한 간략한 설명입니다.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">카드 본문 내용이 여기에 들어갑니다.</p>
  </CardContent>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline" size="sm">취소</Button>
    <Button size="sm">확인</Button>
  </CardFooter>
</Card>`}
              >
                <Card className="w-72">
                  <CardHeader>
                    <CardTitle>카드 제목</CardTitle>
                    <CardDescription>카드에 대한 간략한 설명입니다.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">카드 본문 내용이 여기에 들어갑니다.</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">취소</Button>
                    <Button size="sm">확인</Button>
                  </CardFooter>
                </Card>
              </ComponentPreview>

              {/* Tabs — default variant */}
              <ComponentPreview
                title="Tabs — default 스타일"
                description="콘텐츠를 여러 탭으로 구분합니다. TabsList variant='default'는 배경이 있는 스타일입니다."
                code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
    <TabsTrigger value="tab3">탭 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">탭 1 콘텐츠</TabsContent>
  <TabsContent value="tab2">탭 2 콘텐츠</TabsContent>
  <TabsContent value="tab3">탭 3 콘텐츠</TabsContent>
</Tabs>`}
              >
                <Tabs defaultValue="tab1" className="w-80">
                  <TabsList>
                    <TabsTrigger value="tab1">탭 1</TabsTrigger>
                    <TabsTrigger value="tab2">탭 2</TabsTrigger>
                    <TabsTrigger value="tab3">탭 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <p className="text-muted-foreground p-2 text-sm">탭 1 콘텐츠입니다.</p>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <p className="text-muted-foreground p-2 text-sm">탭 2 콘텐츠입니다.</p>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <p className="text-muted-foreground p-2 text-sm">탭 3 콘텐츠입니다.</p>
                  </TabsContent>
                </Tabs>
              </ComponentPreview>

              {/* Tabs — line variant */}
              <ComponentPreview
                title="Tabs — line 스타일"
                description="TabsList에 variant='line'을 적용하면 밑줄 스타일 탭이 됩니다."
                code={`<Tabs defaultValue="overview">
  <TabsList variant="line">
    <TabsTrigger value="overview">개요</TabsTrigger>
    <TabsTrigger value="analytics">분석</TabsTrigger>
    <TabsTrigger value="settings">설정</TabsTrigger>
  </TabsList>
</Tabs>`}
              >
                <Tabs defaultValue="overview" className="w-80">
                  <TabsList variant="line">
                    <TabsTrigger value="overview">개요</TabsTrigger>
                    <TabsTrigger value="analytics">분석</TabsTrigger>
                    <TabsTrigger value="settings">설정</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview">
                    <p className="text-muted-foreground p-2 text-sm">개요 콘텐츠입니다.</p>
                  </TabsContent>
                  <TabsContent value="analytics">
                    <p className="text-muted-foreground p-2 text-sm">분석 콘텐츠입니다.</p>
                  </TabsContent>
                  <TabsContent value="settings">
                    <p className="text-muted-foreground p-2 text-sm">설정 콘텐츠입니다.</p>
                  </TabsContent>
                </Tabs>
              </ComponentPreview>

              {/* Separator */}
              <ComponentPreview
                title="Separator"
                description="콘텐츠 사이의 시각적 구분선. orientation으로 수평/수직을 지정합니다."
                code={`import { Separator } from "@/components/ui/separator"

// 수평 구분선 (기본값)
<Separator />

// 수직 구분선
<div className="flex h-6 items-center gap-3">
  <span>항목 1</span>
  <Separator orientation="vertical" />
  <span>항목 2</span>
  <Separator orientation="vertical" />
  <span>항목 3</span>
</div>`}
                previewClassName="flex-col gap-4"
              >
                <div className="w-64">
                  <p className="text-sm">위쪽 내용</p>
                  <Separator className="my-3" />
                  <p className="text-sm">아래쪽 내용</p>
                </div>
                <div className="flex h-6 items-center gap-3 text-sm">
                  <span>항목 1</span>
                  <Separator orientation="vertical" />
                  <span>항목 2</span>
                  <Separator orientation="vertical" />
                  <span>항목 3</span>
                </div>
              </ComponentPreview>
            </div>
          </TabsContent>

          {/* ─────────────────────────────────────────── */}
          {/* 탭 4: 피드백                               */}
          {/* ─────────────────────────────────────────── */}
          <TabsContent value="feedback">
            <div className="grid gap-6">
              {/* Tooltip */}
              <ComponentPreview
                title="Tooltip"
                description="요소에 호버할 때 추가 설명을 보여줍니다. TooltipProvider는 루트 레이아웃에 포함되어 있습니다."
                code={`import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Settings className="size-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>설정</TooltipContent>
</Tooltip>`}
              >
                <div className="flex gap-3">
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                      <Settings className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>설정</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                      <User className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>프로필</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger render={<Button variant="outline" size="icon" />}>
                      <Mail className="size-4" />
                    </TooltipTrigger>
                    <TooltipContent>메시지</TooltipContent>
                  </Tooltip>
                </div>
              </ComponentPreview>

              {/* Toast (sonner) */}
              <ComponentPreview
                title="Toast (sonner)"
                description="사용자에게 간단한 알림을 표시합니다. sonner 라이브러리와 ShadcnUI가 통합되어 있습니다."
                code={`import { toast } from "sonner"

// 기본 토스트
toast("메시지가 전송되었습니다.")

// 성공
toast.success("저장되었습니다.", { description: "변경사항이 저장됐습니다." })

// 오류
toast.error("오류가 발생했습니다.", { description: "잠시 후 다시 시도해주세요." })

// 정보
toast.info("업데이트가 있습니다.")`}
              >
                <div className="flex flex-wrap justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => toast("메시지가 전송되었습니다.")}
                  >
                    기본 토스트
                  </Button>
                  <Button
                    variant="outline"
                    className="text-green-600"
                    onClick={() =>
                      toast.success("저장되었습니다.", {
                        description: "변경사항이 성공적으로 저장됐습니다.",
                      })
                    }
                  >
                    성공
                  </Button>
                  <Button
                    variant="outline"
                    className="text-destructive"
                    onClick={() =>
                      toast.error("오류가 발생했습니다.", {
                        description: "잠시 후 다시 시도해주세요.",
                      })
                    }
                  >
                    오류
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      toast.info("새로운 업데이트가 있습니다.")
                    }
                  >
                    정보
                  </Button>
                </div>
              </ComponentPreview>

              {/* Sheet */}
              <ComponentPreview
                title="Sheet (드로어)"
                description="화면 가장자리에서 슬라이드되는 패널. side prop으로 방향을 지정합니다 (right, left, top, bottom)."
                code={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    메뉴 열기
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>사이드 패널</SheetTitle>
      <SheetDescription>패널 내용이 여기에 표시됩니다.</SheetDescription>
    </SheetHeader>
    <div className="mt-4">
      <p>패널 본문 콘텐츠</p>
    </div>
  </SheetContent>
</Sheet>`}
              >
                <div className="flex gap-3">
                  <Sheet>
                    <SheetTrigger render={<Button variant="outline" />}>
                      오른쪽 열기
                    </SheetTrigger>
                    <SheetContent side="right">
                      <SheetHeader>
                        <SheetTitle>사이드 패널</SheetTitle>
                        <SheetDescription>
                          오른쪽에서 슬라이드되는 패널입니다.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-6 flex flex-col gap-4">
                        <p className="text-muted-foreground text-sm">패널 본문 콘텐츠를 여기에 배치하세요.</p>
                        <Separator />
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-medium">메뉴 항목</p>
                          {["대시보드", "프로필", "설정", "로그아웃"].map((item) => (
                            <button
                              key={item}
                              className="text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Sheet>
                    <SheetTrigger render={<Button variant="outline" />}>
                      아래쪽 열기
                    </SheetTrigger>
                    <SheetContent side="bottom">
                      <SheetHeader>
                        <SheetTitle>바텀 시트</SheetTitle>
                        <SheetDescription>
                          아래에서 올라오는 모바일 친화적 패널입니다.
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              </ComponentPreview>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  )
}
