import React from "react";


const Form = ({header, descripton, children}) => {


  return (
    <form className="Form">
      <h2 className="Form_H2">{header}</h2>
      <p className="Form_Description">{descripton}</p>
      {children}
    </form>
  )
}

export default Form;