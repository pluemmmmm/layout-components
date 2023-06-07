import styles from './Notification.module.css';

function Notification(props) {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>{props.title}</h3>
            <p>{props.description}</p>
            <a href=''>ปิดการแจ้งเตือน</a>
        </div>
    );
}

export default Notification;