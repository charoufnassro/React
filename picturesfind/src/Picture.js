import React from 'react'
import ShareIcon from './icon/share.svg'

const Picture = ({author, Durl, url, height, width}) => {
    return (
        <div className="ma2 dib relative bg-black-10 b--black-20 mw5-l ">
            <img src={Durl} alt="" className="db dim mw5-l h5 h4-l    w-100" />
            <div className="pa2 w-100  flex items-center bg-black-10 lh-copy bb absolute bottom-2 mb3   " >
                <img className="w2 h2 w3-m h3-m br-100 " alt="" src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
                <div className="pl3 tl   flex-auto white">
                    <span className="f7-l fw6  db ">{author}</span>
                    <span className="f8-l f7 db ">Width: {width}, Height: {height}</span>
                </div>
                <div>
                    <a href={url} className="f7-l link white ">
                    <img src={ShareIcon} className="dib h2 w2 h1-l w1-l bg-white pa1 br2 shadow-5 hover-light-green ma0 mb0" alt="Share" />
                    </a>
                </div>
            </div>
            <div className="pa2" >
            <a className="link tc ph3 pv2 db bg-animate bg-white hover-bg-light-green fw6 gray hover-white-90 f6 br2 ttc  " href={`${url}/download?force=true`}>Download</a>
            </div>
            
        </div>
    )
}

export default Picture


