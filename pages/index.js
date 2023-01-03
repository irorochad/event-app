import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>NextJs Event App</title>
        <meta name="description" content="Find an event with Nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EventList itmes={FeaturedEvents} />
    </>
  );
}
