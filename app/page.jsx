import React from "react";
import "@styles/globals.css";
import IndexPage from "@components/IndexPage";
import NavBar from "@components/NavBar";

export const metadata = {
  title: "Namadwaar",
  description: "Just a site lol",
};

const RootLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-orange-forme from-0% via-beige via-50% to-orange-forme to-100%">
      <main>
        {/*<Header />*/}
        <NavBar />
        {/*<IndexPage />*/}
      </main>
    </div>
  );
};

export default RootLayout;
