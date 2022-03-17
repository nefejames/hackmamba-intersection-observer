import Head from "next/head";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function ImpressionCounter(inView, entry, i) {
  if (i == data[i]) {
    console.log(`image ${i} in view`);
  }

  console.log(data[i]);

  // console.log(entry);

  // console.log(i);
}

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center pt-10 bg-zinc-900">
      <Head>
        <title>Next.js Intersection Observer</title>
      </Head>

      <h1 className="text-4xl font-bold text-white mb-16">
        Next.js Intersection Observer
      </h1>

      {data.map((i) => (
        <InView
          key={i}
          threshold={1}
          onChange={(inView, entry) => ImpressionCounter(inView, entry, i)}
        >
          {({ ref, inView, entry }) => (
            <div className="mb-10" key={i} ref={ref}>
              <Image
                src={`/images/${i}.png`}
                width={300}
                height={400}
                alt="something amazing"
              />
              <p className="text-white text-lg">{`Image in view? ${inView} `}</p>
            </div>
          )}
        </InView>
      ))}
    </div>
  );
}
