import * as React from "react";
import clsx from "clsx";

export const Line = ({ ...rest }: any) => {
    return (
        <label
            width={rest.width}
            className={clsx('skeleton-line', { 'skeleton-animate': rest.animate })}
            {...rest}
        />
    )
}
