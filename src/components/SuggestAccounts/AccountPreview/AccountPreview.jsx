import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img
                    className={cx("avatar")}
                    src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1670641200&x-signature=rQmDJdLbrsbsFsihz2u7sELz8nI%3D'
                    alt=''
                />
                <Button className={cx("follow-btn")} primary>
                    Follow
                </Button>
            </div>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>theanhentertaiment</strong>
                    <FontAwesomeIcon
                        className={cx("check-icon")}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx("name")}>Nguyễn Quốc Phú</p>
            </div>
            <p className={cx("analytics")}>
                <strong className={cx("value")}>8.2M </strong>
                <label className={cx("label")}>Followers</label>
                <strong className={cx("value")}>607.8M </strong>
                <label className={cx("label")}>Likes</label>
            </p>
        </div>
    );
}

export default AccountPreview;
