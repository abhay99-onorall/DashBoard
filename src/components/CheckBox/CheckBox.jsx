import React from "react";
// import CircularLoader from "../../Utilities/Loader/CircularLoader";
import styles from "./CheckBox.module.css";

const CheckBox = (props) => {
  const checkBoxContainerVar = `container${props.colorType}`;
  const checkmarkVar = `checkmark${props.colorType}`;
  const checkboxBackgroundVar = `checkboxBackground${props.colorType}`;

  console.log()

  return (
    <div className={styles.checkBoxContainer}>
      <label
        htmlFor={props.checkBoxId}
        className={styles[checkBoxContainerVar]}
      >
        {/* --- Label before CheckBox --- */}
        <span
          style={{ 
            display: props.labelBeforeDisplay,
            color: props.labelBeforeColor,
            fontSize: props.labelBeforeFontSize,
            whiteSpace: props.labelBeforeWhiteSpace,
            overflow: props.labelBeforeOverflow,
            textOverflow: props.labelBeforeTextOverflow,
          }}
          className={styles.labelBeforeCheckBoxClass}
        >
          {props.labelBeforeCheckBox}
        </span>

        {/* Gagan */}
        <input
          disabled={props.checkBoxDisabled}
          type="checkbox"
          id={props.checkBoxId}
          name={props.checkBoxName}
          value={props.checkBoxValue}
          checked={props.checkBoxChecked}
          defaultChecked={props.checkBoxDefaultChecked}
          onChange={props.checkBoxOnChange}
        />
        {/* --- Custom CheckBox --- */}
        <span
          style={{
            height: props.checkBoxSize,
            width: props.checkBoxSize,
            minHeight: props.checkBoxSize,
            minWidth: props.checkBoxSize,
            borderRadius: props.checkBoxBorderRadius
          }}
          // style={props.checkBoxStyling}
          className={styles[checkmarkVar]}
        >
          {/* {props.loading && <CircularLoader
            cirLoaderStyle={{
              height: "15px",
              width: "15px",
              borderWidth: "2px",
              borderColor: "#A06CD5",
              borderTopColor: "#331978"
            }}
          />} */}
          {/* --- CheckMark --- */}
          <span style={{
            borderWidth: props.checkBoxCheckBorderWidth,
            height: props.checkBoxCheckHeight,
            width: props.checkBoxCheckWidth
          }}/>
        </span>

        {/* --- Label after CheckBox --- */}
        <span
          style={{ 
            display: props.labelAfterDisplay,
            color: props.labelAfterColor,
            fontSize: props.labelAfterFontSize,
            whiteSpace: props.labelAfterWhiteSpace,
            overflow: props.labelAfterOverflow,
            textOverflow: props.labelAfterTextOverflow,
          }}
          className={styles.labelAfterCheckBoxClass}
        >
          {props.labelAfterCheckBox}
        </span>
        <div className={styles[checkboxBackgroundVar]}></div>
      </label>
    </div>
  );
};

export default CheckBox;
