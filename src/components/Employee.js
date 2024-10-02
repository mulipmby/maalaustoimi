import Image from "next/image";

const Employee = ({ img, name, email, number }) => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-5">
      <Image
        src={img}
        alt="Antti Hytönen"
        height={140}
        className=" rounded-full border-2 border-teal-950 drop-shadow-lg"
      />
      <div className="flex flex-col h-full gap-5 text-center md:text-start">
        <h2 className="font-medium text-lg text-teal-950">{name}</h2>
        <div className="flex flex-col gap-1">
          <a href={`mailto:${email}`} className="">
            {email}
          </a>
          <a href={`tel:+358${number.substring(1)}`} className="">
            {number}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Employee;
