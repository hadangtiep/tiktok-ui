import Tippy from "@tippyjs/react/headless";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./suggestAccounts.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                // visible
                interactive
                placement='right'
                delay={[800, 0]}
                offset={[-65, -100]}
                render={renderPreview}
            >
                <div className={cx("account-item")}>
                    <img
                        className={cx("avatar")}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1670637600&x-signature=L2UX%2BZ07ug7UBUyWw7cXj%2F%2FckJI%3D'
                        atl='hình ảnh'
                    />

                    <div className={cx("item-info")}>
                        <p className={cx("nickname")}>
                            <strong>theanhentertaiment</strong>
                            <FontAwesomeIcon
                                className={cx("check-icon")}
                                icon={faCheckCircle}
                            />
                        </p>
                        <p className={cx("name")}>Nguyễn Quốc Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
