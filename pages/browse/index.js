import Layout from "components/layout/Layout";
import PageHeader from "components/PageHeader";
import VideoSlider from "components/ViideoSlider";
import Redirect from "components/Redirect";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectChoseProfile } from "redux/user/userSelector";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getTopRatedTv,
  getPopularMovies,
  getPopularTv,
  getOriginals,
  getComedies,
  getDocumentaries,
} from "lib/api";

export async function getStaticProps() {
  const trending = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const topRatedTv = await getTopRatedTv();
  const popularMovies = await getPopularMovies();
  const popularTv = await getPopularTv();
  const originals = await getOriginals();
  const comedies = await getComedies();
  const documentaries = await getDocumentaries();

  return {
    revalidate: 1,
    props: {
      trending,
      topRatedMovies,
      topRatedTv,
      popularMovies,
      popularTv,
      originals,
      comedies,
      documentaries,
    },
  };
}

const Home = ({
  trending,
  topRatedMovies,
  popularMovies,
  popularTv,
  originals,
  comedies,
  documentaries,
}) => {
  const user = useSelector(selectCurrentUser);
  const choseProfile = useSelector(selectChoseProfile);
  if (!user) {
    return <Redirect to="/" />;
  }
  if (!choseProfile) {
    <Redirect to="/profiels" />;
  }
  return (
    <Layout
      title="S-A-flix | Netflix Clone"
      description="This is a Netflix Clone Application."
    >
      <PageHeader data={trending[0]} />
      {trending && (
        <VideoSlider data={trending.slice(1, 20)} title="Trending Now" />
      )}
      {topRatedMovies && (
        <VideoSlider data={topRatedMovies} title="Top Rated" />
      )}
      {popularMovies && (
        <VideoSlider data={popularMovies} title="Popular Movies" />
      )}
      {popularTv && <VideoSlider data={popularTv} title="Popular TV Shows" />}
      {originals && <VideoSlider data={originals} title="Originals" poster />}
      {comedies && <VideoSlider data={comedies} title="Comedies" />}
      {documentaries && (
        <VideoSlider data={documentaries} title="Documentaries" />
      )}
    </Layout>
  );
};

export default Home;
