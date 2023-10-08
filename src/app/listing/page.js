"use client";

import Card from "@/components/Card";

import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";
import { CONTACT_URL } from "@/constants/routes";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Listing() {
  const [data, setData] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({});

  const getContacts = async () => {
    const response = await fetch(CONTACT_URL);
    if (response.ok && response.status === 200) {
      const res = await response.json();
      setData(res.data);
    }
  };

  const handleDelete = async (id) => {
    const url = `${CONTACT_URL}/${id}`
    const response = await fetch(url, {
      method: "DELETE"
    });    
    if (response.ok) {
      toast.success("Deleted Succesfully");
    }
  }

  useEffect(() => {
    getContacts();
  }, [handleDelete]);

  return (
    <main className="container min-h-screen text-center">
      <h1 className="text-2xl font-bold mt-8 "> Contact Listing</h1>
      
      {showEdit && (
        <Modal setIsOpen={setShowEdit}>
          <ContactForm data={editData} isEdit={true} />
        </Modal>
      )}
      
      <div className="container grid grid-cols-4 gap-2 p-10">
        {data?.map((contact, index) => (
          <Card
            key={index}
            contact={contact}
            setShowEdit={setShowEdit}
            setEditData={setEditData}
            handleDelete={handleDelete}
          ></Card>
        ))}
      </div>
    </main>
  );
}
