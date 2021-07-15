import React, { FC } from "react";
import styles from "./style.module.scss";
import { textProps } from "../../../../data/Legal/textDataType";

export interface legalTextProps {
  bodyTitle: string;
  bodyArray: Array<textProps>;
}

const Text: FC<legalTextProps> = ({ bodyTitle, bodyArray }) => (
  <div className="_thc-story-section _thc-card">
    <div className={`_text-space ${styles._title}`}>
      <h1 className="_text-space-title">{bodyTitle}</h1>
    </div>
    <div className={`_content-space ${styles["_text-body"]}`}>
      {bodyArray.map(({ title, message }: textProps, index: number) => (
        <div key={index}>
          {title === "" ? (
            <>{message}</>
          ) : (
            <>
              <h3>{title}</h3>
              {message}
            </>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Text;
