import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Day } from './components/templates/Day';
import { Home } from './components/templates/Home';
import { StoreProvider } from './model/store';
import { FadeContent, useRouteTransition } from './utils/useRouteTransition';

function App() {
  const { displayedLocation, contentProps } = useRouteTransition();
  return (
    <div>
      <StoreProvider>
        <FadeContent {...contentProps}>
          <Routes location={displayedLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/day/:id" element={<Day />} />
            <Route
              path="*"
              element={<Navigate to="/" state={{ redirect: true }} />}
            />
          </Routes>
        </FadeContent>
      </StoreProvider>
    </div>
  );
}

export default App;
