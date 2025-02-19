import Accordion from "@/common/ui/accordion/Accordion";
import "@/common/components/calculator/style.scss";

const History = () => {
    const data = JSON.parse(sessionStorage.getItem('distanceHistory') || '[]') as string[];

    return (
        <Accordion summary="История запросов">
            {data.length == 0
                ? <p>История поиска пуста</p>
                : data.map((item) => (
                    <p key={item}>{item}</p>
                ))
            }
        </Accordion>
    )
}

export default History;