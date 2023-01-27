import { useState } from "react";
import Button from "../ui/button";
import classes from "./event-search.module.css";

const EventSearch = (props) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    props.onSearch(year, month);
  };

  console.log(year, month);

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select onChange={(e) => setYear(e.target.value)} id="year">
            <option value="choose-year">Choose Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select onChange={(e) => setMonth(e.target.value)} id="month">
            <option value="choose-month">Choose Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={(e) => handleClick(e)}>Find events</Button>
    </form>
  );
};

export default EventSearch;
