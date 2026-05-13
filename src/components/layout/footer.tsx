import Link from "next/link"
import { Zap } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* 브랜드 */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-md">
                <Zap className="size-4" />
              </div>
              <span>스타터킷</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              Next.js 16 + TypeScript + TailwindCSS + ShadcnUI 기반의 모던 웹 스타터킷
            </p>
          </div>

          {/* 링크 그룹 */}
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">페이지</p>
              <nav className="flex flex-col gap-1.5">
                {[
                  { label: "홈", href: "/" },
                  { label: "소개", href: "/about" },
                  { label: "대시보드", href: "/dashboard" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">기술스택</p>
              <nav className="flex flex-col gap-1.5">
                {[
                  { label: "Next.js", href: "https://nextjs.org" },
                  { label: "TailwindCSS", href: "https://tailwindcss.com" },
                  { label: "ShadcnUI", href: "https://ui.shadcn.com" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} 스타터킷. MIT 라이선스 기반으로 자유롭게 사용하세요.
        </p>
      </div>
    </footer>
  )
}
