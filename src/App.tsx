import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Day } from './components/templates/Day';
import { Home } from './components/templates/Home';
import { FadeContent, useRouteTransition } from './utils/useRouteTransition';

function App() {
  const { displayedLocation, contentProps } = useRouteTransition();
  return (
    <div>
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
    </div>
  );
}

export default App;
