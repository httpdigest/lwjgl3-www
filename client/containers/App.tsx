import React from 'react';
import { Layout } from './Layout';
import { BreakpointProvider } from '~/components/Breakpoint';

// Pull common modules on main bundle
import '~/components/routes/PageView';
import '~/components/HashLinkTarget';

export default function App() {
  return (
    <BreakpointProvider>
      <Layout />
    </BreakpointProvider>
  );
}
