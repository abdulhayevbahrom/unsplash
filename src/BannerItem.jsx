import React, { useState } from 'react'
import { MdFavorite } from 'react-icons/md'


function BannerItem({ img, response }) {
    const [likesNum, setLikeNum] = useState(img.likes)

    const onLike = () => {
        setLikeNum(likesNum + 1)
        // response.lw
    }
    // style={{ backgroundImage: `url(${img.urls.full})` }}
    return (
        <div className="item">
            <img src={img.urls.full} alt="d" title={img.alt_description} />
            <div className="ItemInfo">
                <MdFavorite onClick={onLike} className="like" />
                <span className='likesNum'>{likesNum}</span>
            </div>
        </div>
    )
}

export default BannerItem