import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-muted-foreground/30">404</h1>
            <div className="mx-auto h-0.5 w-16 bg-border"></div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-foreground">Page Not Found</h2>
            <p className="leading-relaxed text-muted-foreground">
              The page <span className="font-medium text-foreground">"{pageName}"</span> does not exist in this app.
            </p>
          </div>

          <div className="pt-6">
            <Link
              to="/"
              className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
