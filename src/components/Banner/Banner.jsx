import '../../sass/banner.scss'

function Banner({ content, background }) {
    return (
        <div className='banner'>
            <img className='banner_img' src={ background } alt="Montagne"></img> 
            <p className='banner_title'>{ content }</p>
        </div>
    )
}

export default Banner