import s from "./Gallery.module.css";
import Block from "./Block/Block";
import PaginationContainer from "../Pagination/PaginationContainer";
import Modal from "../Modal/Modal";
const Gallery = (props) => {
    
    const blockElements = props.photos.map(photo => <Block key = {photo.id} image = {photo.image}/>);

    function openModal(e){
        if(!e.target.classList.contains("image")) return;
            console.log(e.target.src);
        
        
    } 

    return (
        <div>
            <div className="container">
                <div className={s.gallery} onClick = {openModal}>
                    {blockElements}
                </div>
                <PaginationContainer />
                                
            </div>
        </div>

    );
}

export default Gallery;
