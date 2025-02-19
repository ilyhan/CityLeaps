import Button from "@/common/ui/button/Button";
import "@/common/components/calculator/style.scss";
import { FormEvent, useState } from "react";
import { getDistance } from "@/common/utils/getDistance";
import SearchCity from "@/common/components/search/SearchCity";
import { ICity } from "@/common/interfaces/city";

const Calculator = () => {
    const [firstCity, setFirstCity] = useState<ICity | undefined>();
    const [secondCity, setSecondCity] = useState<ICity | undefined>();
    const [distance, setDistance] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstCity && secondCity) {
            setDistance(getDistance(firstCity.lat, firstCity.lon, secondCity.lat, secondCity.lon));
            setError(null);
        } else {
            setDistance(null);
            setError("Ошибка! Не получилось получить данные о городе");
        }
    };

    return (
        <section className="calculator">
            <h1 className="calculator__title">Рассчет расстояний</h1>

            <p className="calculator__description">
                Рассчитайте расстояние между городами России по прямой
            </p>

            <form className="calculator__form" onSubmit={handleSubmit}>
                <SearchCity
                    onSetCity={setFirstCity}
                    name="first_city"
                    label="Первый город"
                    placeholder="Введите город"
                    required
                />
                <SearchCity
                    onSetCity={setSecondCity}
                    name="second_city"
                    label="Второй город"
                    placeholder="Введите город"
                    required
                />

                <Button className="calculator__form-button">
                    Рассчитать
                </Button>
            </form>

            <div className="calculator__output-wrapper">
                {distance !== null &&
                    <p className="calculator__result">
                        Результат: {distance} км
                    </p>
                }
                
                {error && <p className="calculator__error">{error}</p>}
            </div>
        </section>
    )
};

export default Calculator;