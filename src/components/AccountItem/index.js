import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AccoutItem.module.scss";
import Image from "../Image/image";
const cx = classNames.bind(styles);

function AcountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image
                className={cx("avata")}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={cx("check")}
                        />
                    )}
                </h4>
                <span className={cx("userName")}>{data.nickname}</span>
            </div>
        </Link>
    );
}
export default AcountItem;
