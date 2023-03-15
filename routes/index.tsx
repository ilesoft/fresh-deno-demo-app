import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <p>
          Welcome to time management app. Please do the needful!!!
        </p>
        <p><a href={"/write"}>Write your working hours</a></p>
        <p><a href={"/list"}>list your hours</a></p>
        <p><a href={"/api/joke"}>vitsi humoria</a></p>
      </div>
    </>
  );
}
