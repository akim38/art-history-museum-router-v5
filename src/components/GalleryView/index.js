import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const chosenGall = galleries.find((gallery) => gallery.id === +galleryId);

    const artList = chosenGall.objects;
    //console.log(artList)

    return (
        <>
            <h2>{chosenGall.name}</h2>
            <Route exact path={`/galleries/${galleryId}`}>
                {artList.map((art) => (
                    <span key={art.id}>
                        <ArtImageTile art={art} galleryId={chosenGall.id}/>
                    </span>
                ))}
            </Route>
            <Route exact path={`/galleries/${galleryId}/art/:artId`}>
                <ArtDescription gallery={chosenGall}/>
            </Route>
        </>
    );
};

export default GalleryView;
