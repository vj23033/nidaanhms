import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul className="flex flex-col order-2 sm:order-none">
      <h1 className="mb-1 text-[length:var(--heading-h5)] font-bold ">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 py-[10px] hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;