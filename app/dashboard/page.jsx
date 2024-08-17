import { userData } from "@/constants";

const Dashboard = () => {
  const student = userData;

  return (
    <div className="w-screen h-[95dvh]  md:h-[100dvh] md:w-[80%] lg:w-full bg-black text-white/80">
      {/* First section is profile picture */}

      <div className="h-[25%] flex border-b-[1.55px] border-b-gray-400 pr-1">
        <div className="basis-1/3 relative">
          <div className="h-[150px] w-[150px] bg-sky-400 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:bg-sky-400/70 hover:cursor-pointer">
            {/* <Image src={} alt="profile-picture" /> */}
          </div>
        </div>
        <div className="basis-2/3 mt-8 text-center leading-normal">
          <p className="md:text-2xl font-mono mt-4 font-semibold text-lg lg:text-4xl">
            Welcome {`${student.firstName} ${student.lastName}`}
          </p>
          <span className="italic text-xs md:text-sm lg:text-base">
            Please contact Administration for any request on personal student
            info modification.
          </span>
        </div>
      </div>

      {/* Second section student studentDatarmation */}

      <div className="text-sm md:text-base h-[75%] md:h-[75%] flex flex-col justify-start px-8 mt-10 md:grid md:grid-cols-2">
        <p className="py-4">
          {" "}
          <span className="font-medium">First Name:</span> {student.firstName}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Last Name:</span> {student.lastName}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Date of Birth:</span>{" "}
          {student.dateOfBirth}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Address:</span> {student.address}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Country:</span> {student.country}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Identification Document:</span>
          {student.document}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">ID No:</span> {student.idNumber}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
