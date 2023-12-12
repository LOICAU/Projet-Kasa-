import banniereApImg from '../../assets/banniereapropos.png'
import './banapropos.css'

function BanniereAp (){
    return(
        <div className='BannerAp'>
            <img src = {banniereApImg} className='BannierApropos' alt='Banniere à propos'></img>
        </div>
    )
}

export default BanniereAp