import React from "react";
import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="bg-black w-56 absolute top-14 right-0 
   py-5 flex-col border-2 border-gray-800 rounded-sm"
    >
      <div className="flex flex-col gap-3">
        <div
          className="px-3 group/item flex flex-row gap-3
            w-full items-center"
        >
          <img
            src="/images/default-blue.png"
            alt="avatar"
            className="w-8 rounded-md"
          />
          <p
            className="text-white group-hover/item:underline
          text-sm "
          >
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;