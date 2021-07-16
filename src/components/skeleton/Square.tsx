import * as React from "react";
import clsx from "clsx";

export const Square = ({ ...rest }: any) => {
    return (
        <label {...rest} className={clsx('skeleton-square', {'skeleton-animate': rest.animate})}></label>
    )
}
