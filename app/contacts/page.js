import Head from "next/head";
import Link from "next/link";

const Contacts = () => {
  return (
    <div>
      <Head>
        <title>Kumar Utkarsh - Contacts</title>
        <meta name="description" content="Contacts page" />
      </Head>
      <main className="bg-white px-10 dark:bg-[#2f2e31] md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-sm"/>

            <ul className="flex items-center">
              <li>
                
                <Link className="bg-transparent text-gray-800 dark:text-white px-4 py-2 border-none rounded-md ml-8 focus:outline-none" href="/">
                    Back
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-left p-10 py-30">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Contacts
            </h2>
            <div className="mt-8 text-left text-white ">
              <h3 className="text-xl  md:text-3xl font-bold mb-4 underline">Phone</h3>
              <p className="text-sm text-gray-200">+ (91) 9166884183</p>
            </div>
            <div className="mt-8 text-left text-white">
              <h3 className="text-xl  md:text-3xl font-bold mb-4 underline">Email</h3>
              <p className="text-sm text-gray-200">utkarshroy28@gmail.com</p>
            </div>
            <div className="mt-8 text-left text-white">
              <h3 className="text-xl  md:text-3xl font-bold mb-4 underline">Address</h3>
              <p className="text-sm text-gray-200">Muzaffarpur, Bihar</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contacts;
