import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccoutItem.module.scss";
const cx = classNames.bind(styles);
function AcountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avata")}
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e6fbccfe920afeb2bdfabdfb472dda06~c5_100x100.jpeg?x-expires=1669345200&x-signature=VWd0gDYH4mPN8ZR6EMPPSCh6rZw%3D'
                alt=''
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Lù Trọng Thắng</span>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx("check")}
                    />
                </h4>
                <span className={cx("userName")}>đã xác thực</span>
            </div>
        </div>
    );
}
export default AcountItem;
