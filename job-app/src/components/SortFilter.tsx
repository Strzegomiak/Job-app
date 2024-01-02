const SortFilter = () => {
  return (
    <div className="flex w-4/5 h-1/5 justify-center">
      <div>
        <label>Categories</label>
        <select>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
          <option value="fullstack">Fullstack</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div>
        <label>Type:</label>
        <select>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
        </select>
      </div>
      <div>
        <label>Level:</label>
        <select>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>
    </div>
  );
};

export default SortFilter;
