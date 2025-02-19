import "@/common/ui/Button/style.scss";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    title?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ children, ...props }, ref) => {
    return (
        <button
            {...props}
            className={`button ${props.className}`}
            ref={ref}
        >
            {children}
        </button>
    )
});

export default Button;