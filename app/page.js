import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p><Link href='/about'>About</Link></p>
    </main>
  );
}
