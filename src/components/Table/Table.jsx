import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { interestList } from "../../Data/Data";
import { Data } from "../../Data/Data";
import { tableHead } from "../../Data/Data";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export function EngagementRate(data) {
  // console.log(data)
  const variable = data?.map((item) => {
    const { Comments, Likes, hatsoff, qna, supporters } = item;
    const engage = (Likes + Comments + hatsoff + qna) / supporters;

    return {
      engage,
    };
  });
  // console.log(variable);
}

export default function BasicTable() {
  const [data, setData] = useState(Data);
  const [oldData, setOldData] = useState(Data);
  const [categorySelect, setCategorySelect] = useState(false);
  const [creatorSelect, setCreatorSelect] = useState(false);
  const [subid, setSubid] = useState(0);

  const allCategories = ["all", ...new Set(data?.map((item)=> item.category
  ))]

  console.log(allCategories)
  const fetchData = async () => {
    const res = await axios.get("https://retoolapi.dev/eRVegk/data");
    // setData(res?.data);
    // setOldData(res?.data);
    // setData(Data)
    // setOldData(Data)
    EngagementRate(res?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(allCategories)

  const filterSelected = (category) => {
    console.log(category);
    if (category === "all") {
      setData(Data);
      return;
    }
    const newData = oldData.filter((item) => item.category === category);
    setData(newData);
  };

  const handleClick = (data) => { 
    setSubid(data);
    setCreatorSelect(!creatorSelect);
  };

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <div style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
        <table
          style={{ width: "100%", background: "#fff", paddingLeft: "1rem" }}
        >
          <thead>
            <tr
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              {tableHead.map((item) => {
                return (
                  <>
                    {item.id !== 2 ? (
                      <th
                        key={item.id}
                        style={{ minWidth: "150px" }}
                        align="left"
                      >
                        {item.heading}
                      </th>
                    ) : (
                      <th
                        style={{ minWidth: "150px" }}
                        align="left"
                        onClick={() => setCategorySelect(!categorySelect)}
                      >
                        <span className="headingSpan">{item.heading}</span>
                        {categorySelect && (
                          <div className="categoryCont">
                            {interestList.map((item) => (
                              <div
                                key={item.id}
                                className="categorySelect"
                                onClick={() => filterSelected(item.interest)}
                              >
                                {item.interest}
                              </div>
                            ))}
                          </div>
                        )}
                      </th>
                    )}
                  </>
                );
              })}
            </tr>
          </thead>
          {data?.map((item) => (
            <thead key={item.id}>
              <tr className="creator-table-section">
                <td
                  style={{ minWidth: "150px", cursor: "pointer" }} align="left"
                  onClick={() => handleClick(item.id)}
                >
                  {item.creator}
                </td>
                <td style={{ minWidth: "150px" }} align="left">
                  {item.category}
                </td>
                <td style={{ minWidth: "150px" }} align="left">{item.Views}</td>
                <td style={{ minWidth: "150px" }} align="left">{item.supporters}</td>
              </tr>

              {item?.subContainer?.map((item) => {
                return (
                  <>
                    {subid === item.parentId && creatorSelect ? (
                      <div className="creatorDetails">
                        {item.latestVideos?.map((url) => {
                          return <div>Videos: {url.url}</div>;
                        })}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </thead>
          ))}
        </table>
      </div>
    </div>
  );
}
