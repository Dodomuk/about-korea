import '@scss/ToastNotification.scss';
import warning from '@/assets/warning.png';

function ToastNotification(props: { content: string }) {
    return (
        <div className="toast-wrapper">
            <img alt="" src={warning} />
            <p>{props.content}</p>
        </div>
    );
}

export default ToastNotification;
