import Head from "next/head";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Kumar Utkarsh - Portfolio</title>
        <meta name="description" content="Portfolio page" />
      </Head>
      <main className="bg-white px-10 dark:bg-[#2f2e31] md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl" />
            <ul className="flex items-center">
              <li>
                <Link className="bg-transparent text-gray-800 dark:text-white px-4 py-2 border-none rounded-md ml-8 focus:outline-none" href="/">
                    Back
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Portfolio
            </h2>
            <div className="flex justify-center py-3 dark:text-gray-400">
                <div className="relative">phone</div>
                <div className="relative">phone</div>
                <div className="relative">phone</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
