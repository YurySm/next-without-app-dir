
import Layout from "@/components/screens/layout/Layout";
import {NextPageAuth} from "@/interfaces/page.interface";

const AboutUsPage: NextPageAuth = () => {
    return (
        <Layout title={'About us page'} description={'About us page'}>
            AboutUsPage
        </Layout>
    );
};

// 404 page
AboutUsPage.isOnlyUser = true

export default AboutUsPage;
