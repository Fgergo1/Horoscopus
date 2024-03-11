
interface buttonProp {
    to : string,
    name : string
    text : string
}


function Button({to,name, text} : buttonProp) {
    return (
        <a className={name} href={`/${to}`}>{text}</a>
    )
}

export default Button