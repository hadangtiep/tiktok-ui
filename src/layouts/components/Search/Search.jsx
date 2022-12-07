import { useEffect, useState, useRef } from "react";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import * as searchServices from "~/services/searchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useDebounce } from "~/hooks";
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if(!debouncedValue.trim()){
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        }
        fetchApi();
            //CÁCH DÙNG VỚI ASYNC/ AWAIT:
            

            //CÁCH DÙNG VỚI FETCH:
            // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
            //     .then(res => {
            //         return res.json();
            //     })
            //     .then(res => {
            //         setSearchResult(res.data);
            //         setLoading(false);
            //     })
            //     .catch(()=>{
            //         setLoading(false);
            //     })

            //CÁCH DÙNG VỚI AXIOS:

    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = ()=> {
        setShowResult(false);
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }
    }

    
    return (
        <div>
            <HeadlessTippy
                interactive 
                visible= {showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex='-1'
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {
                                searchResult.map(result=>{
                                    return (
                                        <AccountItem key={result.id} data={result} />
                                    )
                                })
                            }
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Tìm kiếm tài khoản và videos'
                        spellCheck={false}
                        onChange = {handleChange}
                        onFocus = {()=>{setShowResult(true)}}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx("clear")} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />
                    }
                    <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;