import React from "react";


const Form = ({header, descripton, children, name, formRef, method}) => {


  return (
    <form className="Form" name={name} ref={formRef} method={method} onSubmit={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}>
      <h2 className="Form_H2">{header}</h2>
      <p className="Form_Description">{descripton}</p>
      {children}
    </form>
  )
}

export default Form;