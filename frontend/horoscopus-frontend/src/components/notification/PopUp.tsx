import "./Notification.scss"

interface notiInterface {
    message: string
}
function PopUp ({message} : notiInterface) {

    return (
            <div className="notification">
                <div className="notofication-body">
                    {message}
                </div>
                <div className="notification-progress"></div>
            </div>
    )
}
export default PopUp