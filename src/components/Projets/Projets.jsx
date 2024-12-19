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
                    lienVersSite={`https://jessicameni.github.io/Projet2Booki/`}
                    text={"Le site web Booki à été réalisé avec du HTML et du CSS dans le but de créer un site web responsive. Il a été réalisé en s'appuyant sur les maquettes mise à disposition sur Figma. Au final, une version desktop, tablette et mobile du site ont été écrites. Problématiques rencontrées : la compréhension de flexbox, stylisationn des elements inline. Grâce à la documentation très fournis sur Internet et les nombreux forum de discution, j'ai pu trouver réponse à mes blocages."}
                    
                />
                <ProjetArticle
                    projetImgAlt={SophieBluel11}
                    imgSrc={SophieBluel}
                    imgAlt={'Capture écran du site web Sophie Bluel'}
                    lienVersSite={`https://github.com/JessicaMeni/Projet3PortfolioArchitecteBluel`}
                    text={"Le portfolio de l'architecte Bluel m'a permis de créer une page web dynamique avec JavaScript ainsi qu'à communiquer avec l'API Swagger. Du côté du front-end, j'ai pu développer la home page de présentation des travaux de Sophie Bluel. C'est avec ce projet que j'ai aussi pu créer une page de connexion administrateur et une modale sans utiliser de bibliotèque déjà existante. Les difficultées avec ce projet ont été la découverte du langage de JavaScript. Les cours en lignes ainsi que les discutions entre développeurs ont pu m'aider à terminer le projet."}
                />
                <ProjetArticle
                    projetImgAlt={NinaCarducci11}
                    imgSrc={NinaCarducci}
                    imgAlt={'Capture écran du site web Nina Carducci'}
                    lienVersSite={`https://jessicameni.github.io/Projet4Carducci/`}
                    text={"Ce projet avait pour but de débugger et optimiser le site de la photographe Carducci. Une des missions consistait à proposer des recommandations pour améliorer la vitesse de chargement de la page et la structure du code. J'ai pu mettre en application mes recommandations et ainsi améliorer la vitesse de chargement du site en convertissant les images au format nouvelle génération Webp, en minimisant ou retardant le chargement des fichiers volumineux. Mon autre mission était de proposer des recommandations pour améliorer le référencement (SEO) de la page sur les moteurs de recherche et l'accessibilité. Problématiques rencontrées: Minimiser les fichier, et savoir lequels minimiser. Grâce à des recherches et à une intelligence Artificielle, j'ai pu mettre le place des fichiers compressés."}
                />
            </div>
        </section>
    )
}

export default Projets