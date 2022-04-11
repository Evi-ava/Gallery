import logo from "../../assets/image/logo.svg"
import CustomMenu from "../CustomMenu/CustomMenu"
import s from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <CustomMenu />
            </div>
        </div>
    );
}

export default Header;