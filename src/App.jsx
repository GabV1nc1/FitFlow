import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { queryClientInstance } from '@/lib/query-client';
import PageNotFound from './lib/PageNotFound';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import History from './pages/History';
import WorkoutDetail from './pages/WorkoutDetail';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error instanceof Error ? error.message : 'Unknown application error.',
    };
  }

  componentDidCatch(error) {
    console.error('FitFlow render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
          <div className="w-full max-w-lg rounded-2xl border border-destructive/30 bg-card p-6">
            <h1 className="font-heading text-2xl font-bold">FitFlow failed to load</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              A runtime error prevented the app from rendering.
            </p>
            <pre className="mt-4 overflow-auto rounded-xl bg-secondary p-4 text-xs text-destructive">
              {this.state.errorMessage}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="workout/:id" element={<WorkoutDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <AppErrorBoundary>
      <QueryClientProvider client={queryClientInstance}>
        <AppRoutes />
        <Toaster />
      </QueryClientProvider>
    </AppErrorBoundary>
  );
}
