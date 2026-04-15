import { Outlet, Link, useLocation } from 'react-router-dom';
import { Dumbbell, History, Zap } from 'lucide-react';

export default function AppLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Train', icon: Zap },
    { path: '/history', label: 'History', icon: History },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-body">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-[0_0_30px_-14px_rgba(34,197,94,0.7)]">
              <Dumbbell className="h-5 w-5 text-primary" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              FitFlow
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'border-primary/30 bg-primary/10 text-primary shadow-[0_0_0_1px_rgba(34,197,94,0.15)]'
                      : 'border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
