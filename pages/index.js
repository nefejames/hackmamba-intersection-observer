import Head from "next/head";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView, entry } = useInView();
  return (
    <div className="w-full h-full flex flex-col justify-center text-center pt-10">
      <Head>
        <title>Next.js Intersection Observer</title>
      </Head>

      <h1 className="text-4xl font-bold text-blue-600">
        Next.js Intersection Observer
      </h1>

      <div className="w-40 mx-auto mt-20">
        <div className="w-full h-20 bg-red-400"></div>
      </div>
    </div>
  );
}
