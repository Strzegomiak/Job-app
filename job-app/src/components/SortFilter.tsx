const SortFilter = () => {
  return (
    <div className="flex justify-center  gap-8 pt-10 flex-wrap flex-col md:flex-row ">
      <div className="flex gap-2 items-center justify-center">
        <label className=" text-sm font-bold text-gray-500">Categories:</label>
        <select className="outline-none focus:outline-none w-32 text-sm font-bold pl-4 py-1 rounded-l">
          <option value=""></option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label className=" text-sm font-bold text-gray-500">Type:</label>
        <select className="outline-none focus:outline-none w-32 text-sm font-bold pl-4 py-1 rounded-l">
          <option value=""></option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
        </select>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label className=" text-sm font-bold text-gray-500">Level:</label>
        <select className="outline-none focus:outline-none w-32 text-sm font-bold pl-4 py-1 rounded-l">
          <option value=""></option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      <button className="text-gray-400 ml-5" type="button">
        Clear All
      </button>
    </div>
  );
};

export default SortFilter;
