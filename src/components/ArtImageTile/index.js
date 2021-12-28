import { Link } from 'react-router-dom';
import GalleryView from '../GalleryView';


const ArtImageTile = ( { art, galleryId } ) => {
    //console.log(art)
    return(
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <img src={art.images[0]?.baseimageurl} />
        </Link>
    )
}

export default ArtImageTile;
