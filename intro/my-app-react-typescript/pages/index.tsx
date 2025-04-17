import Image from "next/image";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";

function getRandomNumber(): number {
  return Math.floor(Math.random() * 123) + 1;
}

const Home: NextPage = () => {
  const [image, setImage] = useState<Array<string>>([
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
  ]);

  return (
    <div >
      <Head>
        <title>Pablo Page</title>
        <meta name="description" content="Creado por pablo" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        {image.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image} />
          </div>
        ))}
      </main>
 <footer> </footer>
 </div>
  );
}
export default Home;