import { useState } from 'react';
const TweetInput = ({ onAddTweet }) => {
 const [tweetText, setTweetText] = useState('');
 const handleSubmit = (e) => {
  e.preventDefault();
  if (tweetText.trim() !== '') {
   onAddTweet(tweetText);
   setTweetText('');
  }
 };
 const handleChange = (e) => {
  setTweetText(e.target.value);
 };
 return (
  <form className="tweet-input-form" onSubmit={handleSubmit}>
   <input type="text" placeholder="What's happening?" value={tweetText} onChange={handleChange} className="tweet-input"/>
   <button type="submit" className="tweet-submit-btn">Tweet</button>
  </form>
 );
};
export default TweetInput;
