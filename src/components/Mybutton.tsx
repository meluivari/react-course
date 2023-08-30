type Props = {
    label: string;
    onClick: () => void;
    active: boolean,
}

export function MyButton({active, label, onClick}: Props) {
    const btnSyle = "p-4" + (active ? " bg-slate-500" : " bg-slate-100");

    return (
        <div className={btnSyle} onClick={onClick}>
            {label}
        </div>
    );
}