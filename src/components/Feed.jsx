import { useState, useEffect } from 'react';
import Tweet from './Tweet';
import TweetInput from './TweetInput';
const Feed = () => {
 const [tweets, setTweets] = useState([]);
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=7')
   .then(response => response.json())
   .then(data => {
    const fetchedTweets = data.map((post, index) => {
     let content = post.title;
     let image = null;
     
     if (index === 0) {
      content = "Vacation is going great! Loving this beautiful sunset 🌅 #travel #sunset";
      image = "https://images.unsplash.com/photo-1506744626753-14c0eec33346?w=600&h=400&fit=crop";
     } else if (index === 1) {
      content = "Just finished setting up my new workstation. What do you guys think? 💻✨";
      image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop";
     } else if (index === 2) {
      content = "Delicious coffee to start the morning! ☕";
      image = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=400&fit=crop";
     } else if (index === 4) {
      content = "City lights always amaze me at night. 🏙️";
      image = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop";
     }
     
     return {
      id: post.id,
      author: index === 0 ? 'Harold' : (index === 1 ? 'TechFan' : 'User ' + post.userId),
      handle: index === 0 ? 'h_wang88' : (index === 1 ? 'tech_guru' : 'user' + post.userId),
      content: content,
      image: image,
      likes: Math.floor(Math.random() * 1000)
     };
    });
    setTweets(fetchedTweets);
   });
 }, []);
 const handleAddTweet = (newContent) => {
  const newTweet = {
   id: Date.now(),
   author: 'My Profile',
   handle: 'myprofile',
   content: newContent,
   image: null,
   likes: 0
  };
  setTweets([newTweet, ...tweets]);
 };
 return (
  <div className="feed">
   <div className="feed-header">
    <h2>Home</h2>
   </div>
   <TweetInput onAddTweet={handleAddTweet} />
   <div className="tweet-list">
    {tweets.map(tweet => (
     <Tweet key={tweet.id} author={tweet.author} handle={tweet.handle} content={tweet.content} image={tweet.image} likes={tweet.likes} />
    ))}
   </div>
  </div>
 );
};
export default Feed;
