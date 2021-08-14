import styles from "../styles/Users.module.css"

const users = () => {
    return (
        <div className={styles.container}> <div className={styles.card}>
            <h1>Users</h1>
            <Link href="/users/statistics" className="btn btn-primary">
                <a>Statistics</a>
            </Link>
            <button className="btn btn-primary">Statistics</button>
        </div></div>
    )
}

export default users
