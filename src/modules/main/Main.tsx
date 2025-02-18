import Calculator from "@/common/components/calculator/Calculator";
import Header from "@/common/components/header/Header";
import "@/modules/main/style.scss";

const Main = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Calculator />
            </main>
        </>
    )
};

export default Main;