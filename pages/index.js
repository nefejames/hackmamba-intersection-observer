import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { InView } from "react-intersection-observer";

function ImpressionCounter(inView, count, setCount) {
  if (inView) {
    setCount((count) => count + 1);
    localStorage.setItem("impressionCount", count);
  }
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-10  pt-10 bg-zinc-900 relative">
      <Head>
        <title>Next.js Intersection Observer</title>
      </Head>

      <h1 className="text-4xl font-bold text-white mb-16 text-center">
        Next.js Intersection Observer Article
      </h1>

      <h2 className="text-4xl font-bold text-white mb-16 fixed top-10 right-10">
        Impression Count: {count}
      </h2>

      {Array.from(Array(3).keys()).map((i) => (
        <p className="text-white text-2xl mb-16" key={i}>
          Irure pariatur velit est anim ipsum anim aliquip officia velit
          consectetur. Duis sint ut consectetur ea anim. Sit proident culpa
          velit officia do incididunt Lorem in deserunt non adipisicing occaecat
          magna. Occaecat occaecat esse excepteur consequat occaecat cupidatat
          aliquip labore esse ad ea. Laboris id excepteur nisi voluptate sunt
          anim commodo amet reprehenderit. Elit ut dolor velit et id. Non
          exercitation ex sint est et sunt elit. Nisi dolor laboris incididunt
          pariatur sint Lorem ullamco occaecat ipsum ullamco. Consectetur
          nostrud incididunt enim dolore elit pariatur quis in proident enim
          elit. Veniam culpa nulla aliquip exercitation occaecat magna. Eiusmod
          tempor consectetur et eiusmod deserunt adipisicing irure nulla.
          Nostrud nisi dolore reprehenderit exercitation amet consectetur non
          laborum officia cupidatat adipisicing et reprehenderit. Cillum nostrud
          commodo dolor eiusmod sit tempor. Duis veniam ipsum tempor velit irure
          esse non duis esse deserunt incididunt. Proident ipsum ut sunt ea
          laborum ipsum dolore incididunt consectetur aliqua sit.
        </p>
      ))}

      <InView
        threshold={0.6}
        onChange={(inView) => ImpressionCounter(inView, count, setCount)}
      >
        {({ ref, inView }) => (
          <div className="mb-10" ref={ref}>
            <Image
              src="/images/1.png"
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

      {Array.from(Array(5).keys()).map((i) => (
        <p className="text-white text-2xl mb-16" key={i}>
          Irure pariatur velit est anim ipsum anim aliquip officia velit
          consectetur. Duis sint ut consectetur ea anim. Sit proident culpa
          velit officia do incididunt Lorem in deserunt non adipisicing occaecat
          magna. Occaecat occaecat esse excepteur consequat occaecat cupidatat
          aliquip labore esse ad ea. Laboris id excepteur nisi voluptate sunt
          anim commodo amet reprehenderit. Elit ut dolor velit et id. Non
          exercitation ex sint est et sunt elit. Nisi dolor laboris incididunt
          pariatur sint Lorem ullamco occaecat ipsum ullamco. Consectetur
          nostrud incididunt enim dolore elit pariatur quis in proident enim
          elit. Veniam culpa nulla aliquip exercitation occaecat magna. Eiusmod
          tempor consectetur et eiusmod deserunt adipisicing irure nulla.
          Nostrud nisi dolore reprehenderit exercitation amet consectetur
        </p>
      ))}
    </div>
  );
}
