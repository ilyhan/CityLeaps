import { InputHTMLAttributes, Ref, forwardRef } from "react";
import "@/common/ui/input/style.scss";
import Label from "@/common/ui/label/Label";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    containerClass?: string;
};

const Input = forwardRef<HTMLInputElement, IInputProps>(
    ({
        label,
        containerClass = "",
        ...props
    }: IInputProps, ref: Ref<HTMLInputElement>) => {

        return (
            <div className={`input__container ${containerClass}`}>
                {label && <Label
                    name={props.name}
                    content={label} />
                }

                <div className="input__wrapper">
                    <input
                        ref={ref}
                        {...props}
                        className={`input ${props.className ? props.className : ""}`}
                    />
                </div>
            </div>
        )
    }
);

export default Input;