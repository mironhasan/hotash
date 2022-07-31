import React from "react";

function Item({ children, ...rest }, ref) {
    return <li { ...rest } ref={ ref }>{ children }</li>
}

const forwardItem = React.forwardRef(Item);
export default forwardItem