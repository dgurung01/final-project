import React from "react";
import "./Modal.css"


const Modal = (props) => {
  return (
      <div>
          <div className="modal-wrapper"
              style={{
                  // transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                  height : props.show ? '100%' : "0",
                  opacity: props.show ? '1' : '0'
              }}>
              <div className="modal-header">
                  <h3>Create Event</h3>
                  <span className="close-modal-btn" onClick={props.close}>×</span>
              </div>
              <div className="modal-body">
                  {props.children}
                  
              </div>
              {/* <div className="modal-footer">
                  <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                  <button className="btn-continue">CONTINUE</button>
              </div> */}
          </div>
      </div>
  )
}


export default Modal;