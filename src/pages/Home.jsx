import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";

import Posts from "../components/Post/Post.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
