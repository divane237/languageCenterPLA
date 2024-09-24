import ImageUpload from "@/components/ImageUpload";
import { getStudentData } from "@/lib/actions/user";

const Dashboard = async () => {
  const result = await getStudentData();

  const { student, error } = JSON.parse(result);

  if (error) {
    console.log(error);
    return <p>Please reload the page or check your internet connection.</p>;
  }

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

        <div className="basis-2/3 text-center leading-normal place-content-center">
          <p className="md:text-2xl font-mono font-semibold text-base lg:text-4xl">
            Welcome {`${student.firstName} ${student.lastName}`}
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
          <span className="font-medium">Identification Document: </span>
          {student.identificationDocument}
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
