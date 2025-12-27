import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return(
    <div className="min-h-screen flex flex-col w-full ">

      <Header />

      <main className="flex-1 bg-[#0c0c0c]">
        {children}
      </main>

      <Footer />

    </div>
  );
};

export default Layout;
