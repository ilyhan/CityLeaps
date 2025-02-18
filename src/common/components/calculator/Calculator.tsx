import Button from "@/common/ui/button/Button";
import Input from "@/common/ui/input/Input";
import "@/common/components/calculator/style.scss";

const Calculator = () => {
    return (
        <section className="calculator">
            <h1 className="calculator__title">Рассчет расстояний</h1>

            <p className="calculator__description">
                Рассчитайте расстояние между городами России по прямой
            </p>

            <form className="calculator__form">
                <Input name="first_city" label="Первый город" placeholder="Введите город"/>
                <Input name="second_city" label="Второй город" placeholder="Введите город"/>

                <Button>
                    Рассчитать
                </Button>
            </form>

            <div style={{marginTop: '32px'}}>
                result
            </div>
        </section>
    )
};

export default Calculator;