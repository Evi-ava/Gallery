import preloader from "../../assets/image/preloader.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <div className="preloaderContent">
                <img src={preloader} alt="preloader" />
                <span className={s.subscribe}>Loading...</span>
            </div>
        </div>
    );
}

export default Preloader;