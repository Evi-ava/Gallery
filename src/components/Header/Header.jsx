import logo from "../../assets/image/logo.svg";
import CustomMenuContainer from "../CustomMenu/CustomMenuContainer";
import s from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <CustomMenuContainer />
            </div>
        </div>
    );
}

export default Header;