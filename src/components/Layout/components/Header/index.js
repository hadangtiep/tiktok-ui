import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";
import { UploadIcon } from "~/components/Icons/Icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import Image from "~/components/Image/image";

const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "Tiếng Việt",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "EngLish",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Phản hồi và Trợ giúp",
        to: "/feeedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Phím tắt trên bàn phím",
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult(["kết quả 1", "kết quả 2", "kết quả 3"]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "Hiển thị thông tin",
            to: "/@hoa",
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: "Mua điểm",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Cài đặt",
            to: "/settings",
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Đăng xuất",
            to: "/logout",
            separate: true,
        },
    ];
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo} alt='ticktok' />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx("search-result")}
                            tabIndex='-1'
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accouts</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input
                            placeholder='Tìm kiếm tài khoản và video'
                            spellCheck={false}
                        />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx("loading")}
                            icon={faSpinner}
                        />

                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content='Upload video'
                                placement='bottom'
                            >
                                <button className={cx("action-btn")}>
                                    <UploadIcon className={cx("uploadIcon")} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEM}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e6fbccfe920afeb2bdfabdfb472dda06~c5_100x100.jpeg?x-expires=1670029200&x-signature=QawBF3WvIUn8bjXrf8z7%2Bqn8xrM%3D'
                                alt='mrTi'
                                fallback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
