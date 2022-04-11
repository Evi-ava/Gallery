import s from "./Gallery.module.css";
import Block from "./Block/Block";
import PaginationContainer from "../Pagination/PaginationContainer";

const Gallery = (props) => {
    const blockElements = props.photos.map(photo => <Block key = {photo.id} image = {photo.image}/>);

    return (
        <div>
            <div className="container">
                <div className={s.gallery}>
                    {blockElements}
                </div>
                <PaginationContainer />
            </div>
        </div>

    );
}

export default Gallery;
