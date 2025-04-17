import Image from "next/image";

import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";

function getRandomNumber(): number {
  return Math.floor(Math.random() * 123) + 1;
}

export default function Home() {
  return (
    <div >
    <Head>
   <title>Pablo Page</title>
   <meta name="description" content="Creado por pablo" />
   </Head>
   <h1 className="text-3xl font-bold underline">
      Hello world!
</h1>

<RandomFox image ={  `https://randomfox.ca/images/${getRandomNumber()}.jpg` }/>
      <footer>
       
      </footer>
    </div>
  );
}
