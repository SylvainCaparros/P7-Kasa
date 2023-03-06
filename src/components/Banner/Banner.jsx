import '../../sass/banner.scss'

function Banner({ content, background }) {
    return (
        <div className='banner'>
            <img className='banner_img' src={ background } alt="Montagne"></img> 
            <div className='banner_title'>{ content }</div>
        </div>
    )
}

export default Banner