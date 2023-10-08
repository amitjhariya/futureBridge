const { CONTACT_URL } = require("@/constants/routes");
import toast from "react-hot-toast";

export const createContact = async (data) => {
  try {
    const response = await fetch(CONTACT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok && (response.status === 200 || response.status === 201)) {
      console.log("Form Submitted");
      return true;
    }
  } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
  }
  return false;
};

export const updateContact = async (id ,data) => {
  try {
    const url = id ? `${CONTACT_URL}/${id}` : CONTACT_URL;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok && (response.status === 200 || response.status === 201)) {
      console.log("Form Submitted");
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
};
export const deleteContact = async () => {
  try {
    const url = isEdit ? `${CONTACT_URL}/${data._id}` : CONTACT_URL;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.ok && (response.status === 200 || response.status === 201)) {
      console.log("Contact Deleted");
      return true;
    }
  } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
  }
  return false;
};
