import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from "~/components/Icons/Icons";
import SuggestAccounts from "~/components/SuggestAccounts";

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <Menu>
                <MenuItem
                    title='Dành cho bạn'
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title='Đang Follow'
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title='LIVE'
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            <SuggestAccounts label='Tài khoản được đề xuất' />
            {/* <SuggestAccounts label='Tài khoảng đang theo dõi' /> */}
        </aside>
    );
}
export default Sidebar;
