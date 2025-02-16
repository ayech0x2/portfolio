import styles from "../css/utils.module.css";
import MuteIcon from "./icons/mute-icon";
import UnmuteIcon from "./icons/unmute-icon";

export default function Utils() {
  return (
    <div className={styles.container}>
      <MuteIcon />
      <UnmuteIcon />
    </div>
  );
}
