"use client";

const Form = ({ children, handleSubmit, ...props }) => {
  
  const formSubmit = (e) => {
    e.preventDefault()
    handleSubmit(e)
  }


  return <form onSubmit={formSubmit} {...props} className="flex flex-col w-96 mt-8 mx-auto p-4">{children}</form>;
};

export default Form;
