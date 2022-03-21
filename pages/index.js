import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { InView } from "react-intersection-observer";

function ImpressionCounter(inView, i, count, setCount) {
  if (inView) {
    setCount((count) => count + 1);
    console.log(`image ${i + 1} in view`);
    console.log(count);

    localStorage.setItem("impressionCount", count);
  }
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center pt-10 bg-zinc-900 relative">
      <Head>
        <title>Next.js Intersection Observer</title>
      </Head>

      <h1 className="text-4xl font-bold text-white mb-16">
        Next.js Intersection Observer
      </h1>

      {Array.from(Array(20).keys()).map((i) => (
        <InView
          key={i}
          threshold={0.6}
          onChange={(inView) => ImpressionCounter(inView, i, count, setCount)}
        >
          {({ ref, inView }) => (
            <div className="mb-10" key={i} ref={ref}>
              <Image
                src={`/images/${i + 1}.png`}
                width={300}
                height={400}
                alt="something amazing"
              />
              <p
                className={`text-white text-2xl font-bold ${
                  inView ? "text-green-600" : "text-red-600"
                }`}
              >{`Image in view? ${inView} `}</p>
            </div>
          )}
        </InView>
      ))}

      <h2 className="text-4xl font-bold text-white mb-16 fixed top-10 right-10">
        Impression Count: {count}
      </h2>
    </div>
  );
}
