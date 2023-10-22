import React from "react";
import { BanknotesIcon, BookOpenIcon, LockClosedIcon } from "@heroicons/react/20/solid";

function HomePage() {
  return (
    <div className="text-accent w-screen flex flex-col items-center justify-center h-screen px-2">
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BanknotesIcon className="h-8 w-8" />
            <h2>Track your cashflow!</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BookOpenIcon className="h-8 w-8" />
            <h2>Stay organized easily!</h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <LockClosedIcon className="h-8 w-8" />
            <h2>Secure & OnChain</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
