import banniereImg from '../../assets/banniere.png'
import './bannierehome.css'

function BanniereH(){
    return(
        <div className='BannerHome'>
            <img src = {banniereImg} className='BannierHome' alt=' Banniere'></img>
            <div className='textB'> Chez vous, partout et ailleurs</div>
        </div>

    )
}

export default BanniereH