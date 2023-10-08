const Button = ({ children, ...props }) => {
    return <button
        className="bg-gray-900 text-white hover:bg-gray-700  py-2 px-4 rounded m-2 "
        {...props}>
        {children}
    </button>;
};

export default Button;
