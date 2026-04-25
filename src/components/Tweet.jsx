const Tweet = ({ author, handle, content, image, likes }) => {
 return (
  <div className="tweet">
   <div className="tweet-avatar">{author[0]}</div>
   <div className="tweet-body">
    <div className="tweet-header">
     <span className="tweet-author">{author}</span>
     <span className="tweet-handle">@{handle}</span>
    </div>
    <p className="tweet-content">{content}</p>
    {image && <img src={image} alt="Tweet attachment" className="tweet-image" />}
    <div className="tweet-footer">
     <span>❤️ {likes}</span>
     <span>🔄 Retweet</span>
     <span>💬 Reply</span>
     <span>📤 Share</span>
    </div>
   </div>
  </div>
 );
};
export default Tweet;
