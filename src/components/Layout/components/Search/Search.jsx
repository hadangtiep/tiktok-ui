import { useEffect, useState, useRef } from "react";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AcountItem from "~/components/AccountItem";
import styles from './search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    
    useEffect(() => {
        if(!searchValue || searchValue.trim() === ""){
            setSearchResult([]);
            return;
        }else{
            setLoading(true)
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    setSearchResult(res.data);
                    setLoading(false);
                })
                .catch(()=>{
                    setLoading(false);
                })
        }
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = ()=> {
        setShowResult(false);
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
                            <h4 className={cx("search-title")}>Accouts</h4>
                            {
                                searchResult.map(result=>{
                                    return (
                                        <AcountItem key={result.id} data={result} />
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
                        placeholder='Tìm kiếm tài khoản và video'
                        spellCheck={false}
                        onChange = {(e)=>{setSearchValue(e.target.value)}}
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
                    <button className={cx("search-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;