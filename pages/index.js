import Layout from "components/layout/Layout";
import IndexTop from "components/IndexTop";
import OurStories from "components/OurStories";
import Faq from "components/Faq";
import existUser from "hoc/exsitUser.hoc";

const Index = () => {
  return (
    <Layout
      title="Destinywatch | #1 streaming site"
      description="This is a free streaming Application."
    >
      <IndexTop />
      <OurStories />
      <Faq />
    </Layout>
  );
};

export default existUser(Index);
