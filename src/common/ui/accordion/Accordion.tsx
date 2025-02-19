import "@/common/ui/accordion/style.scss";
import arrowUp from "/public/img/arrow_up.svg";
import { ReactNode } from "react";

interface IAccordionProps {
    summary: string;
    children: ReactNode;
    name?: string;
};

const Accordion = ({ summary, children, name}: IAccordionProps) => {
    return (
        <div className="accordion">
            <details name={name} className={"accordion__details"}>
                <summary className={"accordion__summary"}>
                    {summary}
                    <img src={arrowUp} className="accordion__icon" alt="arrow" />
                </summary>
            </details>

            <div className="accordion__content" role="definition">
                <div className={"accordion__content-body"}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Accordion;