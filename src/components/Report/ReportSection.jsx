import React, { useState } from "react";
import { ReportData } from "../../Data/Data";
import "./ReportSection.css";
import { RiCloseCircleFill } from "react-icons/ri";
import Popup from "../Popup/Popup";
import CheckBox from "../CheckBox/CheckBox";
import Timeline from "../Timeline/Timeline";

const ReportSection = () => {
  const allReport = ReportData.map((item) => {
    return item.Report.map((data) => {
      return data.reportTitle;
    });
  });

  const allReportTitles = allReport.map((item) => {
    return new Set(item);
  });
  // console.log(ReportData)
  // console.log(allReport,"all Report")
  // console.log(allReportTitles, "set")

  const initialTimelineState = {
    fromHours: 0,
    fromMinutes: 0,
    fromSeconds: 0,
    toHours: 0,
    toMinutes: 0,
    toSeconds: 0,
  };

  const [select, setSelect] = useState();
  const [openpopup, setopenpopup] = useState(false); // popup for colorpicker
  const [inOutAnimation, setInOutAnimation] = useState(false);
  const [timeline, setTimeline] = useState(initialTimelineState)
  console.log(timeline, "timeline");
  // const [selectTitle, setSelectTitle] = useState(false);
  // const [selectDescription, setSelectDescription] = useState(false);
  const [optionId, setOptionId] = useState();

  const handleClick = (id, string) => {
    setOptionId(id);
    setSelect(string);
    // if (string === "title") {
    // 	setSelectTitle(!selectTitle)
    // }
    // else if (string === "description") {
    // 	setSelectDescription(!selectDescription)
    // 	return;
    //}
  };

  const [allReportTitles3, setAllReportTitles3] = useState()
  const handlePopup = (data) => {
    console.log("hello");
    console.log(data);
    setAllReportTitles3([...new Set(data)])
    // allReportTitles2 = [...new Set(data)]
    // allReportTitles2 = new Set(data)
    // allReportTitles2 = new Set(data)
  };
  console.log(allReportTitles3, "allReportTitles3");

  const onChangeTimelineHandler = (e) => {
    if (e.target.value > 59) {
      alert("max limit exceeded");
      return;
    }
    setTimeline({ ...timeline, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <table className="report-table">
        <thead>
          <tr className="table-row" align="left">
            <th>Reported Content</th>
            <th>Report Title</th>
            <th>Take a Look</th>
            <th>Take action</th>
          </tr>
        </thead>
        {ReportData.map((report) => {
          return (
            <>
              <thead style={{ overflow: "hidden" }}>
                <tr className="table-row">
                  <td>{report.VideoTitle}</td>
                  <td
                    style={{
                      backgroundColor:
                        select === "title" && optionId === report.contentId
                          ? "#f799a354"
                          : "#fff",
                    }}
                  >
                    <span
                      style={{ minWidth: "130px" }}
                      onClick={() => handleClick(report.contentId, "title")}
                    >
                      here
                    </span>
                  </td>

                  <td
                    style={{
                      backgroundColor:
                        select === "description" &&
                        optionId === report.contentId
                          ? "#f799a354"
                          : "#fff",
                    }}
                    onClick={() => handleClick(report.contentId, "description")}
                  >
                    Click Here
                  </td>
                  <td
                    onClick={() => [
                      setopenpopup(true),
                      setInOutAnimation(true),
                      handlePopup(
                        report.Report.map((item) => item.reportTitle)
                      ),
                    ]}
                  >
                    Click Here
                  </td>
                </tr>

                <div className="underDivCont">
                  {select !== undefined && optionId === report.contentId && (
                    <span
                      className="close-btn"
                      onClick={() => handleClick("close")}
                    >
                      <RiCloseCircleFill />
                    </span>
                  )}
                  {report.Report.map((item) => {
                    if (select === "title" && optionId === report.contentId) {
                      return (
                        <div className="underDiv" key={item.id}>
                          {item.reportTitle}
                        </div>
                      );
                    }

                    if (
                      select === "description" &&
                      optionId === report.contentId
                    ) {
                      return (
                        <div className="underDiv">
                          <div className="underDivDesc">
                            <span>Description</span>
                            <br />
                            <span>{item.reportDescription}</span>
                          </div>
                          <div className="underDivImg">
                            <span>Image</span>
                            <br />
                            <img src={item.img} alt="not found"></img>
                          </div>
                          <div className="underDivDate">
                            <span>Date</span>
                            <br />
                            <span>{item.date}</span>
                          </div>
                          <div className="underDivName">
                            <span>Name</span>
                            <br />
                            <span>{item.userName}</span>
                          </div>
                          <div className="underDivID">
                            <span>Id</span>
                            <br />
                            <span>{item.userid}</span>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
                {/* {report.Report.map((item) => ( */}

                {/* <> */}

                {/* {console.log(ReportData.length, "length")}
                    {select === "title" 
					// && optionId === item.parentId 
					? 
					(
                      <div
					  className="underDiv" 
					  key={item.id}>
                        {item.reportTitle}
                        <span onClick={() => handleClick("close")}>x</span>
                      </div>
                    ) : select === "description"
					//  &&
                    //   optionId === item.parentId 
					  ? (
                      <div className="underDiv">{item.reportDescription}</div>
                    ) : select === "close" ? (
                      ""
                    ) : (
                      ""
                    )} */}
                {/* 							
						<thead>
						<tr className='table-row'>
						<td>Contnet</td>
						<td onClick={() => handleClick(report.id)}>{report.reportTitle}
						<div className='message'>
						{ReportData.length}
						</div>
						</td>
						<td>here here</td>
						</tr>
						{report.subid.map((item) => {
							return(
								<>
								{optionId === item.parentid && select ?
									<div className='underDiv'>{item.reportDescription}</div>
									: ("")
								}
								</>
								)})}
							</thead> */}
                {/* </> */}
                {/* ))} */}
              </thead>
            </>
          );
        })}
      </table>

      <Popup
        trigger={openpopup}
        maxWidthForPopupInner="fit-content"
        minWidthForPopupInner="22rem"
        inOutAnimation={inOutAnimation}
        setInOutAnimation={setInOutAnimation}
        textAlignForHeading="center"
        setTrigger={setopenpopup}
        popupOuterStyle={{ cursor: "auto" }}
      >
        <div className="container">
          <div className="input-cont">
            <label htmlFor="Title">Title</label>
            <input type="text" required />
          </div>
          <div className="input-cont">
            <label htmlFor="Description">Description</label>
            <input type="text" required />
          </div>

          {allReportTitles3?.map((titles) => {
            return (
              <div key={titles} style={{ width: "fit-content" }}>
                <CheckBox
                  colorType="RoundedBlue"
                  labelAfterDisplay="none"
                  labelBeforeCheckBox={titles}
                  checkBoxId={titles}
                  checkBoxName={titles}
                  checkBoxValue={titles}
                  checkBoxChecked={allReportTitles?.includes(titles)}
                  // checkBoxOnChange={props.handleInterestsChange}
                />
              </div>
            );
          })}
          <Timeline onChangeTimelineHandler={onChangeTimelineHandler}/>
          
          {/* <Timeline onChangeTimelineHandler={onChangeTimelineHandler}/> */}
        </div>
      </Popup>
    </div>
  );
};

export default ReportSection;
