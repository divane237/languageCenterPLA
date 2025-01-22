import { administrativeStaff } from "@/constants";
import Image from "next/image";
import React from "react";
const OurStaff = () => {
  return (
    <section className="my-1 py-2">
      <h2 className="text-center text-base lg:text-xl font-bold tracking-wider">
        OUR STAFF
      </h2>
      <ul className="grid grid-cols-team gap-4 py-2 justify-center">
        {administrativeStaff.map((staff, i) => (
          <li
            className="border-2 border-gray-300 flex flex-col items-center rounded-t-full gap-y-4 bg-orange-400 px-2"
            key={`${staff.postion} ${i}`}
          >
            <Image
              alt="divane"
              src={`/images/${staff.image}.jpg`}
              width={250}
              height={250}
              className="rounded-full w-[250px] aspect-square border-[1px] mt-3 object-center hover:border-sky-300/80 hover:scale-[1.1]"
            />
            <h3 className="font-semibold text-center">{staff.postion}</h3>
            <p className="text-center">{staff.name}</p>
            <div className="self-stretch py-2  ">
              <p> 📧 {staff.email}</p>
              <p>📞 {staff.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurStaff;
