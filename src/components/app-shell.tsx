import { Sidebar } from "@/components/sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col">
          <header className="flex h-14 items-center justify-between border-b px-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Digiexam
              </p>
              <h1 className="text-sm font-semibold text-foreground">
                Brand playground
              </h1>
            </div>
            <div className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              CRM-inspired shell
            </div>
          </header>
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
