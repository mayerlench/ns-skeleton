import * as React from "react";
import clsx from "clsx";

export const Circle = ({ ...rest }: any) => {
    return (
        <label
            {...rest}
            className={clsx('skeleton-circle', { 'skeleton-animate': rest.animate })}
        />
    )
}
