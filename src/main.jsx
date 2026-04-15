import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.getElementById('root');

function renderBootstrapError(error) {
  const message = error instanceof Error ? error.message : 'Unknown bootstrap error.';

  if (!rootElement) {
    return;
  }

  rootElement.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0b1220;color:#f8fafc;padding:24px;font-family:system-ui,sans-serif;">
      <div style="max-width:720px;width:100%;background:#111827;border:1px solid rgba(239,68,68,.35);border-radius:20px;padding:24px;">
        <h1 style="margin:0 0 12px;font-size:28px;">FitFlow failed to start</h1>
        <p style="margin:0 0 16px;color:#94a3b8;">The app could not bootstrap. Check the browser console and make sure you are running it with Vite.</p>
        <pre style="margin:0;background:#020617;padding:16px;border-radius:12px;overflow:auto;white-space:pre-wrap;color:#f87171;">${message}</pre>
      </div>
    </div>
  `;
}

async function bootstrap() {
  try {
    const { default: App } = await import('./App.jsx');

    if (!rootElement) {
      throw new Error('Root element "#root" was not found.');
    }

    ReactDOM.createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error('FitFlow bootstrap error:', error);
    renderBootstrapError(error);
  }
}

bootstrap();
