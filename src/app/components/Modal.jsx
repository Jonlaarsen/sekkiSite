import React from "react";

const Modal = ({  setShowModal ,children, src }) => {
    
    
     return(  <div className="modal-overlay">
            {/* Wrap the whole Modal inside the newly created StyledModalWrapper
            and use the ref */}
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#">
                            {src}
                        </a>
                    </div>
                    {/* {src && <h1>{title}</h1>} */}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    
)}
   

export default Modal