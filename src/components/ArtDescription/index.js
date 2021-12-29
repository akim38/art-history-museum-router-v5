import { useParams, Route, Link } from "react-router-dom";

const ArtDescription = ({ gallery }) => {
    console.log(gallery)

    const { artId } = useParams();
    console.log(artId);

    

    return (
        <>
            <Link to={gallery.obje}>
                {gallery.objects.title}
            </Link>
            <Link to={`/galleries/${gallery.id}`}>
                Back to Gallery
            </Link>
        </>
    );
};

export default ArtDescription;
