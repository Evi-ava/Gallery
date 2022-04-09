import s from './Block.module.css';

const Block = (props) => {
    return (
        <div className={s.block}>
            <img className={s.img} src={`http://gallery.dev.webant.ru/media/${props.image.name}`} alt="img" />
        </div>
    );
}

export default Block;