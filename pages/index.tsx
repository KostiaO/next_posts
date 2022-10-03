import type { NextPage } from 'next';
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <div className="app">
      <Link href="/posts">
        <h2>go here</h2>
      </Link>
    </div>
  )
}

export default Home;
