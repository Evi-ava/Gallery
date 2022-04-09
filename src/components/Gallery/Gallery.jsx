import s from "./Gallery.module.css";
import Block from "./Block/Block";
const Gallery = (props) => {
    
    const blockElements = props.photos.map(photo => <Block key = {photo.id} image = {photo.image}/>);

    return (
        <div className={s.gallery}>
            {blockElements}
        </div>
    );
}

export default Gallery;