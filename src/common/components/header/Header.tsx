import logo from "/public/img/logo.png";
import "@/common/components/header/style.scss";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo"/>
        </header>
    )
};

export default Header;