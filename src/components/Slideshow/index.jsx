
import { useState } from 'react'
import './slideshow.css'
import ArrowRight from '../../assets/flechedroite.png'
import ArrowLeft from '../../assets/flechegauche.png'



function Slide({ images }) { 
   const [currentIndex, setCurrentIndex] = useState(0)

   function nextImage() { // Passe a l'image suivante
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
   }

   function prevImage() { // Passe a l'image precedente
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
   }


   return (
      <section className='ContSlider'>
         
         {images.length > 1  
         &&
         <> 
            {/* // Affiche le compteur d'image */}
            <p className='CountSlider'>{currentIndex + 1} / {images.length}</p> 
            
            {/* // Affiche les fleches de navigation, au click on passe a l'image suivante ou precedente */}
            <img className='ArrowSliderLeft' src={ArrowLeft} alt="Flèche gauche" onClick={prevImage} />
            <img className='ArrowSliderRight' src={ArrowRight} alt="Flèche droite" onClick={nextImage} /> 
         </>
         }
         
         {/* // Affiche l'image actuelle en fonction de l'index */}
         <img className='ImgSlider' src={images[currentIndex]} alt="Logement" /> 


      </section>
   )
}

export default Slide;

