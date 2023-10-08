"use client";

import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Form from "./Form";
import Button from "./Button";
import Loader from "./Loader";
import { createContact, updateContact } from "@/services/contact";
import toast from "react-hot-toast";

const ContactForm = ({ data: editData, isEdit = false }) => {
  const [loading, setLoading] = useState(false);

  const initialdata = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    about: "",
  };

  const [data, setdata] = useState(isEdit ? editData : initialdata);

  const handleSubmit = async () => {
    setLoading(true);
    if (isEdit) {
      const id = data._id;
      const response = await updateContact(id,data);
      if (response) {
        toast.success("Edited Succesfully");
        setdata(editData)
      }
    } else {
      const response = await createContact(data);
      if (response) {
        toast.success("Created Succesfully");
        setdata(initialdata)
      }
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <Input
        name="firstName"
        type="text"
        value={data.firstName}
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <Input
        name="lastName"
        type="text"
        value={data.lastName}
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        type="email"
        value={data.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <Input
        name="country"
        type="text"
        value={data.country}
        placeholder="Country"
        onChange={handleChange}
      />

      <Textarea
        name="about"
        type="text"
        value={data.about}
        placeholder="About me"
        onChange={handleChange}
      />
      <div className="w-1/2 mx-auto text-sm">
        <Button>Submit {loading && <Loader />} </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
