import React from "react";

export default function IconInput({ icon, type, fieldSize, placeholder, passwordVisible, ...rest }) {

    const [visible, setVisible] = React.useState(false);
    const handleAction = () => setVisible(!visible);

    return (
       <div className={`mc-icon-field ${ fieldSize }`}>
            <i className="material-icons">{ icon || "account_circle" }</i>
            <input type={ visible ? "text" : type || "text" }  placeholder={ placeholder || "placeholder..." } { ...rest } />
            {passwordVisible && 
                <button 
                    type = "button" 
                    className = "material-icons" 
                    onClick = { handleAction }
                >
                    { visible ? "visibility_off" : "visibility" }
                </button>
            }
       </div>
    )
}