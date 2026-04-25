const Widgets = () => {
 return (
  <div className="widgets">
   <div className="search-bar">
    <input type="text" placeholder="Search Twitter" />
   </div>
   <div className="trending-box">
    <h3>What's happening</h3>
    <div className="trend">
     <p className="trend-category">Technology · Trending</p>
     <p className="trend-title">ReactJS</p>
     <p className="trend-tweets">120K posts</p>
    </div>
    <div className="trend">
     <p className="trend-category">Education · Trending</p>
     <p className="trend-title">Web Development</p>
     <p className="trend-tweets">85K posts</p>
    </div>
    <div className="trend">
     <p className="trend-category">Trending in India</p>
     <p className="trend-title">#CollegeProject</p>
     <p className="trend-tweets">54.2K posts</p>
    </div>
    <div className="trend">
     <p className="trend-category">Entertainment · Trending</p>
     <p className="trend-title">#NewMovieTrailer</p>
     <p className="trend-tweets">230K posts</p>
    </div>
    <div className="trend">
     <p className="trend-category">Sports · Trending</p>
     <p className="trend-title">World Cup Finals</p>
     <p className="trend-tweets">1.2M posts</p>
    </div>
   </div>
  </div>
 );
};
export default Widgets;
