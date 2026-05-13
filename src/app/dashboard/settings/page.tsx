"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { PageHeader } from "@/components/layout/page-header"

const settingsSchema = z.object({
  name: z
    .string()
    .min(2, "이름은 최소 2자 이상이어야 합니다.")
    .max(50, "이름은 50자를 초과할 수 없습니다."),
  email: z
    .string()
    .email("올바른 이메일 주소를 입력해주세요."),
  bio: z
    .string()
    .max(200, "자기소개는 200자를 초과할 수 없습니다.")
    .optional(),
  language: z.string({ error: "언어를 선택해주세요." }),
  notifications: z.boolean(),
  terms: z
    .boolean()
    .refine((val) => val === true, "약관에 동의해야 합니다."),
})

type SettingsFormValues = z.infer<typeof settingsSchema>

const defaultValues: SettingsFormValues = {
  name: "",
  email: "",
  bio: "",
  language: "ko",
  notifications: true,
  terms: false,
}

export default function SettingsPage() {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  })

  function onSubmit(values: SettingsFormValues) {
    console.log(values)
    toast.success("설정이 저장되었습니다.", {
      description: `${values.name}님의 설정이 성공적으로 업데이트되었습니다.`,
    })
  }

  return (
    <>
      <PageHeader
        title="설정"
        description="프로필 및 계정 설정을 관리하세요."
      />

      <div className="max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* 프로필 섹션 */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold">프로필</h2>
              <Separator />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} />
                    </FormControl>
                    <FormDescription>
                      서비스에서 표시될 이름입니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="hello@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      알림 및 계정 관련 이메일을 수신할 주소입니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>자기소개</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="간단한 자기소개를 작성해주세요. (선택사항)"
                        className="resize-none"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      최대 200자까지 입력할 수 있습니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 환경설정 섹션 */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold">환경설정</h2>
              <Separator />

              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>언어</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="언어를 선택해주세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ko">한국어</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                        <SelectItem value="zh">中文</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      서비스 인터페이스 언어를 설정합니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notifications"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">이메일 알림</FormLabel>
                      <FormDescription>
                        새로운 활동이나 업데이트에 대한 이메일 알림을 받습니다.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 약관 동의 섹션 */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold">약관</h2>
              <Separator />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        이용약관 및 개인정보처리방침에 동의합니다.
                      </FormLabel>
                      <FormDescription>
                        서비스를 이용하려면 약관에 동의해야 합니다.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "저장 중..." : "설정 저장"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}
