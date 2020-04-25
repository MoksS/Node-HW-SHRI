import React, { FC, RefObject } from "react";
import "./Form.scss";

export interface FormProps {
  header: string;
  descripton: string;
  name: string;
  method: string;
  formRef: RefObject<HTMLFormElement>;
}

const Form: FC<FormProps> = ({header, descripton, children, name, formRef, method}) => {

  return (
    <form className="Form" name={name} ref={formRef} method={method} onSubmit={(e) => e.preventDefault()} onClick={(e) => e.preventDefault()}>
      <h2 className="Form_H2">{header}</h2>
      <p className="Form_Description">{descripton}</p>
      {children}
    </form>
  )
}

export default Form;