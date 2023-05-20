import React from 'react';
import FeedItem from './FeedItem';

const feedList = ({feedItems}) => {

    const feedItemList = feedItems.map((feedItem) => {
        return <FeedItem feedItem={feedItem} key={feedItem._id}/>
    })

    return ( 
        <div>
            <h3>a list of feed items</h3>
            <div>
            {feedItemList}
            </div>
        </div>
     );
}
 
export default feedList;