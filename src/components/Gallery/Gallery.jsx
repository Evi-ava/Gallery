import s from "./Gallery.module.css";

const Gallery = (props) => {

    return (
        <div className={s.gallery}>
            <div className={s.block}>1</div>
            <div className={s.block}>2</div>
            <div className={s.block}>3</div>
            <div className={s.block}>4</div>
            <div className={s.block}>5</div> 
        </div>
    );
}

export default Gallery;