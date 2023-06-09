import { Text } from "@fluentui/react";
import { Settings24Regular } from "@fluentui/react-icons";

import styles from "./SettingsButton.module.css";

export const SettingsButton = ({ className, onClick }) => {
  return (
    <div className={`${styles.container} ${className ?? ""}`} onClick={onClick}>
      <Settings24Regular />
      <Text>{"Prompts"}</Text>
    </div>
  );
};
