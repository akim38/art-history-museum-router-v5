import { useParams } from 'react-router-dom';

const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();
    console.log(galleryId);

    const chosenGall = galleries.find((gallery) => gallery.id === +galleryId);
    console.log(chosenGall);

    return (
        <h2>{chosenGall.name}</h2>
    );
};

export default GalleryView;
