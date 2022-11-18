import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <h4>Sidebar</h4>
        </aside>
    );
}
export default Sidebar;
