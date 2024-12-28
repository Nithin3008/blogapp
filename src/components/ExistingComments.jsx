import React from "react";

function ExistingComments() {
  return (
    <div className="mt-5 w-3/5 bg-white px-3 py-5 rounded-2xl space-y-3">
      <div className="flex items-center gap-4">
        <img
          src="/userImg.jpeg"
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-xs text-gray-400">2 days Ago</span>
      </div>
      <div className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius
        labore minima nisi laborum aut, optio nemo vitae quibusdam illum, fugit
        distinctio recusandae aliquam nihil nulla! Modi aliquam facere
        dignissimos!
      </div>
    </div>
  );
}

export default ExistingComments;
