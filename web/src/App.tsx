import React from 'react';
import NavigationScroll from 'layout/navigation-scroll';
import AppRouter from 'routes';

function App() {
  return (
    <div className="App">
      <NavigationScroll>
        <AppRouter />
      </NavigationScroll>
    </div>
  );
}

export default App;
