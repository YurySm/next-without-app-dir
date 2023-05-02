import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/screens/layout/header/Header";
import {Titillium_Web} from "next/font/google";
import Meta from "@/components/seo/Meta";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import('./Footer'), {ssr: false})


const titilliumWeb = Titillium_Web({ weight: ["300", '400', '600', '700'], subsets: ['latin'] })
const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <div className={titilliumWeb.className}>
                <Header/>
                <main>
                    {children}
                </main>
                <DynamicFooter/>
            </div>
        </Meta>
    );
};

export default Layout;
