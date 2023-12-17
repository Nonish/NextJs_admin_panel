import styles from "@/app/home.module.css";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to NextJs Dashboard Project</h1>
      <h3>This project is created by using NextJs with server component and Next-auth for authentication.</h3>
      <Link href="/login">
        <button className={styles.button}>Go to login page</button>
      </Link>
      <span>Project link :&nbsp;
        <a href="https://github.com/Nonish/NextJs_admin_panel"
          style={{ textDecoration: "underline" }}>
          Github Repository
        </a>
      </span>
    </div >
  )
}

export default Homepage;