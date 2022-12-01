import React from "react";
import Cards from "../Cards/Cards";
import ReportSection from "../Report/ReportSection";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = ({ selected }) => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      {

        selected === 0 ?
          <Cards />
          : selected === 1 ? <Table /> : selected === 2 ? <ReportSection />
            : ("")

      }
    </div>
  );
};

export default MainDash;
