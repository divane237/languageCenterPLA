import ImageUpload from "@/components/ImageUpload";
import { getStudentData } from "@/lib/actions/user";

const Dashboard = async () => {
  const response = await getStudentData();

  const { student, error, message } = JSON.parse(response);

  if (error)
    return (
      <div className="bg-black/80 min-h-[92dvh] w-full md:min-h-[100%] relative">
        <p className="text-lg lg:text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white/90 whitespace-nowrap">
          Poor network, please refresh the page.
        </p>
      </div>
    );

  return (
    <div className="min-h-[92dvh] w-full md:min-h-[100%]  text-white/80 bg-black ">
      {/* First section is profile picture */}

      <div className="h-[22%] flex border-b-[1.55px] border-b-gray-400">
        <div className="basis-1/3 relative">
          <div className="h-[6rem] w-[6rem] md:h-[7.5rem] md:w-[7.5rem] bg-sky-400 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:bg-sky-400/70 hover:cursor-pointer flex items-center justify-center">
            <ImageUpload
              firstName={student?.firstName}
              id={student?.id}
              userId={student?.user_id}
              avatarImage={student?.avatarImage}
            />
          </div>
        </div>

        <div className="basis-2/3 text-center leading-normal place-content-center mr-2 md:mr-4 lg:mr-8 ">
          <p className="md:text-2xl font-mono font-semibold text-base lg:text-4xl">
            Welcome {`${student?.firstName} ${student?.lastName}`}
          </p>
          <span className="italic text-[0.5rem] md:text-sm lg:text-base">
            Please contact Administration for any request on personal student
            info modification.
          </span>
        </div>
      </div>

      {/* Second section student studentDatarmation */}

      <div className="text-sm md:text-base  md:h-[70%] flex flex-col justify-start px-8 mt-10 md:grid md:grid-cols-2">
        <p className="py-4">
          {" "}
          <span className="font-medium">First Name:</span> {student?.firstName}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Last Name:</span> {student?.lastName}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Date of Birth:</span>{" "}
          {student?.dateOfBirth}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Address:</span> {student?.address}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Country:</span> {student?.country}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">Identification Document: </span>
          {student?.identificationDocument}
        </p>
        <p className="py-4">
          {" "}
          <span className="font-medium">ID No:</span> {student?.idNumber}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
