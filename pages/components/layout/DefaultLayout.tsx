import React, { PropsWithChildren } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
const DefaultLayout = ({ children }: PropsWithChildren) => {
        return (
                <>
                        <Header />
                        <main className="mt-[64px]">
                                {children}
                        </main>
                        <Footer />
                </>
        );
};
export default DefaultLayout;