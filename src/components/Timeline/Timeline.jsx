import React from "react";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";

import styles from "./Timeline.module.css";

const Timeline = ({
//   timeline,
  onChangeTimelineHandler,
//   saveTimelineHandler,
//   deleteTimeline,
//   index,
//   message,
}) => {
  return (
    <React.Fragment>
      <div className={styles.timeline}>
        {/* <label htmlFor="">{index + 1}.</label> */}

        <div className={styles.timelineFromInputContainer}>
          <input
            // defaultValue={timeline.hours}
            placeholder="00"
            type="number"
            name="fromHours"
            id="fromHours"
            min="0"
            max="59"
            // value={fromHours}
            onChange={onChangeTimelineHandler}
          />
          <span className={styles.colon}>:</span>
          <input
            // defaultValue={timeline.minutes}
            placeholder="00"
            type="number"
            name="fromMinutes"
            id="fromMinutes"
            min="0"
            max="59"
            // value={fromMinutes}
            onChange={onChangeTimelineHandler}
          />
          <span className={styles.colon}>:</span>
          <input
            // defaultValue={timeline.seconds}
            placeholder="00"
            type="number"
            name="fromSeconds"
            id="fromSeconds"
            min="0"
            max="59"
            // value={fromSeconds}
            onChange={onChangeTimelineHandler}
          />
        </div>

        {/* HIDING TO TIMELINES FOR THE TIME BEING */}
        {/* <span className={styles.timelineTo}>To</span> */}

        <div
          style={{ display: "none" }}
          className={styles.timelineToInputContainer}
        >
          <input
            placeholder="00"
            type="number"
            name="toHours"
            id="toHours"
            min="0"
            max="99"
            // value={toHours}
            onChange={onChangeTimelineHandler}
          />
          <span className={styles.colon}>:</span>
          <input
            placeholder="00"
            type="number"
            name="toMinutes"
            id="toMinutes"
            min="0"
            max="59"
            // value={toMinutes}
            onChange={onChangeTimelineHandler}
          />
          <span className={styles.colon}>:</span>
          <input
            placeholder="00"
            type="number"
            name="toSeconds"
            id="toSeconds"
            min="0"
            max="59"
            // value={toSeconds}
            onChange={onChangeTimelineHandler}
          />
        </div>

        {/* <div className={styles.timelineIcons}>
          <span
            className={timeline.hours|| timeline.minutes || timeline.seconds ? `${styles.saveTimelineIcon} ${styles.active}` : `${styles.saveTimelineIcon} `} //Gowtham
            onClick={() => saveTimelineHandler(timeline.id)}
          >
            Save
          </span>
          <MdDelete
            className={styles.deleteTimelineIcon}
            color="#B00015"
            onClick={() => deleteTimeline(timeline.id)}
          />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Timeline;
