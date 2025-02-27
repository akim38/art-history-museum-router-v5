import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import harvardArt from './data/harvardArt'; // Data for art galleries lives in this App component!
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

function App() {
  // console.log(harvardArt);

  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records}/>

      <Switch>
        <Route exact path='/'>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records}/>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
