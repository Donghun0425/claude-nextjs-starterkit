import * as React from "react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "@/components/ui/code-block"

interface ComponentPreviewProps {
  title: string
  description?: string
  code: string
  children: React.ReactNode
  className?: string
  previewClassName?: string
}

export function ComponentPreview({
  title,
  description,
  code,
  children,
  className,
  previewClassName,
}: ComponentPreviewProps) {
  return (
    <div className={cn("rounded-xl border overflow-hidden", className)}>
      {/* 미리보기 영역 */}
      <div
        className={cn(
          "bg-background flex min-h-36 items-center justify-center p-8",
          previewClassName
        )}
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          {children}
        </div>
      </div>
      {/* 정보 + 코드 */}
      <div className="border-t">
        <div className="bg-muted/40 border-b px-4 py-3">
          <p className="text-sm font-semibold">{title}</p>
          {description && (
            <p className="text-muted-foreground mt-0.5 text-xs">{description}</p>
          )}
        </div>
        <CodeBlock code={code} />
      </div>
    </div>
  )
}
