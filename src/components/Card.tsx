import { PropsWithChildren, ReactNode } from "react";
import "./styles.css";

type CardProps = {
    header?: ReactNode;
} & PropsWithChildren;

export function Card({children, header}: CardProps) {
    return <div className="card-container">
        <div className="m-3 font-bold">
            {header}
        </div>
        {children}
    </div>
}