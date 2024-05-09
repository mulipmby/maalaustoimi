const Contact = ({ info, id }) => {
  return (
    <div id={id} className="px-4 w-full py-8 bg-teal-900">
      <div className="flex md:flex-row flex-col justify-center items-center w-full h-full p-4 md:gap-40 gap-10">
        <div>
          <h1 className="w-full text-2xl text-white font-medium">{info}</h1>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="tel:+358442743255"
            className="bg-white text-teal-900 rounded-full text-lg p-4 px-8"
            style={{ whiteSpace: "nowrap" }}
          >
            044 274 3255
          </a>
          {/* <button className="border border-white rounded-full text-xl text-white p-4">
                  Tarjouspyyntölomake
                </button> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
