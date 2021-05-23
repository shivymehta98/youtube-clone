import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined'
import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow.js'
import VideoRow from './VideoRow.js'

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
                </div>
            <hr/>
            <ChannelRow 
            image ="https://avatars.githubusercontent.com/u/39136450?s=60&v=4"
            channel = "Shivangi Mehta"
            verified
            subs = "659K"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
            <hr />
            <VideoRow 
            title = "Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            channel = "Clever Programer"
            views = "256k"
            verified
            subs = "659K"
            timestamp = "59 seconds ago"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
             <VideoRow 
            title = "Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            channel = "Clever Programer"
            views = "256k"
            verified
            subs = "659K"
            timestamp = "59 seconds ago"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
             <VideoRow 
            title = "Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            channel = "Clever Programer"
            views = "256k"
            verified
            subs = "659K"
            timestamp = "59 seconds ago"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
             <VideoRow 
            title = "Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            channel = "Clever Programer"
            views = "256k"
            verified
            subs = "659K"
            timestamp = "59 seconds ago"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
             <VideoRow 
            title = "Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            channel = "Clever Programer"
            views = "256k"
            verified
            subs = "659K"
            timestamp = "59 seconds ago"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
             <VideoRow 
            title = "Let's Build a YouTube Clone with REACT JS for Beginners"
            image ="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            channel = "Clever Programer"
            views = "256k"
            verified
            subs = "659K"
            timestamp = "59 seconds ago"
            noOfVideos ={382}
            description = "You can find latest coding updates here"
            />
          

        </div>
    )
}

export default SearchPage
