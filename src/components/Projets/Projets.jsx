import './Projets.scss'
import ProjetArticle from '../ProjetArticle/ProjetArticle';
import Booki11 from '../../assets/Booki1-1.webp'
import Booki from '../../assets/Booki.webp'
import NinaCarducci11 from '../../assets/NinaCarducci1-1.webp'
import NinaCarducci from '../../assets/NinaCarducci.webp'
import SophieBluel11 from '../../assets/SophieBluel1-1.webp'
import SophieBluel from '../../assets/SophieBluel.webp'

function Projets() {
    return(
        <section id='projects'>
            <h2>Mes projets</h2>
            <div className='projects-div'>
                <ProjetArticle
                    projetImgAlt={Booki11}
                    imgSrc={Booki}
                    imgAlt={'Capture écran du site web Booki'}
                    text={'Projet Booki'}
                />
                <ProjetArticle
                    projetImgAlt={SophieBluel11}
                    imgSrc={SophieBluel}
                    imgAlt={'Capture écran du site web Sophie Bluel'}
                    text={'Projet Sophie Bluel'}
                />
                <ProjetArticle
                    projetImgAlt={NinaCarducci11}
                    imgSrc={NinaCarducci}
                    imgAlt={'Capture écran du site web Nina Carducci'}
                    text={'Projet Sophie Bluel'}
                />
            </div>
        </section>
    )
}

export default Projets