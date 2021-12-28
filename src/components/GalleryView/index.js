import { useParams, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    const chosenGall = galleries.find((gallery) => gallery.id === +galleryId);

    const artList = chosenGall.objects;

    //console.log(artList)

    // const ArtImageTile = artList.map((artwork) => {
    //     return Object.values(artwork)
    // });

    //console.log(String.fromCharCode(89,111,117,32,115,104,111,117,108,100,32,108,111,111,112,32,116,104,114,111, 117,103,104,32,96,103,97,108,108,101,114,121,46,111,98,106,101,99,116,115,96, 46,32,58,41))

    console.log(chosenGall)

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
        </>
    );
};

export default GalleryView;
