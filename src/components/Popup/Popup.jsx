import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Popup.module.css";

const Popup = (props) => {
  // const [zoomIn, setZoomIn] = useState(true);

//   const handleAnimation = () => {
//     props.inOutAnimation ? `${styles.fadeIn}` : `${styles.fadeOut}`;
//   };

  const popupInnerStyleVar = props.popupInnerStyle
    ?  props.popupInnerStyle
    :  {
      backgroundColor: props.bgColorForPopupInner,
      height: props.heightForPopupInner,
      maxWidth: props.maxWidthForPopupInner,
      minWidth: props.minWidthForPopupInner,
      maxHeight: props.maxHeightForPopupInner,
      minHeight: props.minHeightForPopupInner,
      padding: props.paddingForPopupInner,
    }

  // useEffect(() => {
  //   setTimeout(() => {
  //       props.setTrigger(false)
  //   }, 500)
  // }, [props, props.setTrigger])

  return (
    props.trigger && (
      // POPUP BACKGROUND
      <div
        onClick={(e) => {
          if (e.target.classList.length !== 0) {
            // console.log(e.target.classList);

            if (e.target.className?.split(" ")[1] === "popupOuter") {
              props.setInOutAnimation(false);
              setTimeout(() => {
                props.setTrigger(false);
              }, 500);
            }
          }
        }}
        className={
          props.inOutAnimation
            ? `${styles.popup} popupOuter ${styles.fadeIn}`
            : `${styles.popup} popupOuter ${styles.fadeOut}`
        }
        style={props.popupOuterStyle}
      >
        <div
          style={popupInnerStyleVar}
          className={
            props.inOutAnimation
              ? `${styles.popup_Inner} ${styles.zoomInCLass}`
              : `${styles.popup_Inner} ${styles.zoomOutCLass}`
          }
        >
          <div className={styles.heading_and_closeBtn}>
            {/* POPUP HEADING */}
            <h2
              style={{
                padding: props.paddingForHeading,
                textAlign: props.textAlignForHeading,
                fontSize: props.fontSizeForHeading,
                color: props.colorForHeading,
              }}
              className={styles.popupHeading}
            >
              {props.heading}
            </h2>
            {/* POPUP CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => {
                props.setInOutAnimation(false);
                setTimeout(() => {
                  props.setTrigger(false);
                }, 500);
                if (props.closePopup) {
                  props.closePopup();
                }
              }}
              className={styles.close_Button}
              style={props.styleForCloseButton}
            >
              <AiOutlineCloseCircle size="2em" />
            </button>
          </div>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Popup;
