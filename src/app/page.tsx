import Image from "next/image";
import Navbar from "./Navbar/navbar";
import Header from "./Header/header";
// import Dashboard from "./Dashboard/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Header />
      {/* <Dashboard /> */}
    </main>
  );
}
