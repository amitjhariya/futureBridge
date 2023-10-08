import Button from "@/components/Button";

const Card = ({ children, contact, setShowEdit, setEditData ,handleDelete}) => {
  const handleEdit = () => {
    setEditData(contact);
    setShowEdit(true);
  };
  

  return (
    <div className="rounded border  hover:shadow-sm">
      <div className="p-4 text-left text-sm text-gray-600">
        <p className="p-2  ">
          <span className="text-gray-900 font-bold">Name : </span>{" "}
          {`${contact.firstName} ${contact.lastName}`}
        </p>
        <p className="p-2 text-sm">
          <span className="text-gray-900 font-bold">Email : </span>
          {contact.email}
        </p>
        <p className="p-2 text-sm">
          <span className="text-gray-900 font-bold">Country : </span>
          {contact.country}
        </p>
        <p className="p-2 text-sm">
          <span className="text-gray-900 font-bold">About : </span>
          {contact.about}
        </p>
        <div className="flex text-xs justify-end">
          <div className="">
            <Button onClick={handleEdit}>Edit </Button>
          </div>
          <div className="">
            <Button onClick={() => handleDelete(contact._id)}>Delete </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
