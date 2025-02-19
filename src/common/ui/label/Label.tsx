import "@/common/ui/label/style.scss";

interface ILabelProps {
    content: string;
    name?: string;
};

const Label = ({ content, name }: ILabelProps) => {
    return (
        <label className="label" htmlFor={name}>
            {content}
        </label>
    )
};

export default Label;