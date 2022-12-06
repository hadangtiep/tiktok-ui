import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '~/assets/images';
import {useState, forwardRef} from 'react';
import styles from './image.module.scss';

const Image = forwardRef(({className, src, alt, fallback: customFallback = images.noImage, ...props}, ref) => {
    const [fallback, setFallback] = useState(''); //fallback nghĩa là thay thế
    const handleError = () => {
        setFallback(customFallback);
    }
    return (
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError = {handleError}/>
    )
})
Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
}
export default Image;