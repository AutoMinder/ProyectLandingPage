import classes from './Button.module.scss';

const Button = ({children, className, onClick, ...rest}) => {
 return(
    <button className={`${classes['Button']} ${className ?? ""}`} {...rest} onClick={onClick}>
        {children}
    </button>
 )
    
}

export default Button;

