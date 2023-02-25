import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <Layout>
            <p>Contact!</p>
        </Layout>
    )
}
