import styles from '@/styles/Layout.module.css'
import Image from "next/image";
import logo from '@/assets/images/1663939695160.jpg';
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <Link href={"/"}>
                        <Image src={logo} width={100} className={styles.logo}/>
                    </Link>
                    <div className={styles.menubar}>
                        <ul>
                            <li>
                                <Link href={"/"}>Home</Link>
                                <Link href={"/about"}>About</Link>
                                <Link href={"/services"}>Services</Link>
                                <Link href={"/portfolio"}>Portfolio</Link>
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.page}>
                    {children}
                </div>
            </div>
        </div>
    );
}