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

      <Route path='/galleries/:galleryId'>
        <GalleryView galleries={harvardArt.records}/>
      </Route>
    </div>
  );
}

export default App;
