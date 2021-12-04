import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post 
            profilrPic="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/244479938_3219106631704350_7450238020548801998_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bR2VTRFRZugAX-_WjBe&tn=XLeXauln-einCmiF&_nc_ht=scontent.fccu10-1.fna&oh=c890d0d835e843f9a379c677e96de2f4&oe=61991727"
            message="The nature ends at here"
            timestamp="This is a timestamp"
            username="Subhasish Ghosh"
            image="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/258166293_575340976756223_1050665232580605038_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=IRkS6aOhwJ0AX8G2aqF&tn=XLeXauln-einCmiF&_nc_ht=scontent.fccu10-1.fna&oh=e417f9528818fe889b741defc445dcb2&oe=619A08D2"
        />
        <Post 
            profilrPic="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-1/p200x200/246607047_411182627051419_7886922912187146230_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=c6021c&_nc_ohc=GNDUZFkHn8IAX8TTLSZ&tn=XLeXauln-einCmiF&_nc_ht=scontent.fccu10-1.fna&oh=57b0dc52ae99314e5d32f78a50d372dd&oe=6199A3D4"
            message="Good Afternoon :) "
            timestamp="This is a timestamp"
            username="Korean Webtoon"
            image="https://scontent.fccu10-1.fna.fbcdn.net/v/t39.30808-6/s640x640/257428433_429060198596995_4988316131569799159_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YH15u_D_sqUAX-I_cmB&_nc_ht=scontent.fccu10-1.fna&oh=42664d8e71296ed4feaa23ef640294c9&oe=619A8B66"
        />
        <Post />
        </div>
    )
}

export default Feed;
