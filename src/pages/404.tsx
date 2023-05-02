import React, {FC} from 'react';
import Layout from "@/components/screens/layout/Layout";
import Image from "next/image";
import Head from "next/head";

const NotFound: FC = () => {
    return (
        <Layout title={'404 Not found!'}>
            <Head>
                <title>Not found</title>
            </Head>
            <div style={{textAlign: 'center'}}>
                <Image priority src={'/404-1.png'} alt={'404'} width={512} height={341}/>
            </div>
        </Layout>
    );
};

export default NotFound;
