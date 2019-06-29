import React from 'react'
import Picture from './Picture'

const ListPicture = ({p}) => {

    const listpictures = p.map( pic => {
        return <Picture key={pic.id} id={pic.id} author={pic.author} url={pic.url} Durl={pic.download_url} height={pic.height} width={pic.width}/>
    })
    return (
        listpictures
    )
}

export default ListPicture

//  "id":"117",
// "author":"Daniel Ebersole",
// "width":1544,
// "height":1024,
// "url":"https://unsplash.com/photos/Q14J2k8VE3U",
// "download_url":"https://picsum.photos/id/117/1544/1024"