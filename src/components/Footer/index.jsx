import LogoFooter from '../../assets/logofooter.png'
import './footer.css'

function Footer (){
    return (
        <footer className='Footer'>
            <img src = {LogoFooter} className='FootLogo' alt='Logo Footer'></img>
            <p className='TexteFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer