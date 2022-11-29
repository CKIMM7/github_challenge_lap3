import React from 'react'
import { useNavigate } from 'react-router-dom'

const ArtTest = React.forwardRef(({ art }, ref) => {
    const navigate =  useNavigate()

    function checkArt () {
        console.log('checkArt')
        navigate(`${art.id}`)
    }


    // return(
    //     <>
    //         <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}></img>
    //         <p>{art.artist_title}</p>
    //         <p>{art.title}</p>
    //         <p>{art.category_titles}</p>
    //         <p>{art.credit_line}</p>
    //         <button onClick={checkArt}>Check out full img</button>
    //     </>
    //     )

    const postBody = (  
        <>
            <div className='frame'>
            <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}></img>
            </div>
            {/* <p>{art.artist_title}</p> */}
            {/* <p>{art.category_titles}</p> */}
            <p>{art.title}</p>
            <p>{art.credit_line}</p>
            <button onClick={checkArt}>Check out full img</button>
        </> 
    )

 const content = ref ? <div className='art' ref={ref}>{postBody}</div> : <div className='art'>{postBody}</div>
    return content
})

export default ArtTest
