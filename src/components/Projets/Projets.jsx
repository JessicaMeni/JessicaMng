import './Projets.scss'
import ProjetArticle from '../ProjetArticle/ProjetArticle';
import ProjetArticleGit from '../ProjetArticleGit/ProjetArticleGit';
import ProjetPlanification from '../ProjetPlanification/ProjetPlanification';
import Booki375px from '../../assets/Booki1-1.webp'
import Booki from '../../assets/Booki.webp'
import SophieBluel375px from '../../assets/SophieBluel1-1.webp'
import SophieBluel from '../../assets/SophieBluel.webp'
import NinaCarducci375px from '../../assets/NinaCarducci1-1.webp'
import NinaCarducci from '../../assets/NinaCarducci.webp'
import Kasa375px from '../../assets/Kasa1-1.webp'
import Kasa from '../../assets/Kasa.webp'
import MonVieuxGrimoire from '../../assets/MonVieuxGrimoire.webp'
import MonVieuxGrimoire375px from '../../assets/MonVieuxGrimoire375px.webp'

function Projets() {
    return(
        <section id='projects'>
            <h2>Mes projets</h2>
            <div className='projects-div'>
                <ProjetArticle
                    projetImgAlt={Booki375px}
                    imgSrc={Booki}
                    imgAlt={'Capture écran du site web Booki'}
                    lienVersSite={`https://jessicameni.github.io/Projet2Booki/`}
                    text={"Le site web Booki a été l'occasion pour moi de développer un site de réservation d'hôtels en ligne en utilisant HTML et CSS dans le but de créer une interface responsive, garantissant une expérience optimale sur tous types d'écrans. Il a été réalisé en s'appuyant sur les maquettes mise à disposition sur Figma. J'ai mis en œuvre des fonctionnalités dynamiques telles que des filtres de recherche ainsi que la gestion de l'affichage des résultats en fonction des critères de l'utilisateur."}
                    
                />
                <ProjetArticleGit
                    projetImgAlt={SophieBluel375px}
                    imgSrc={SophieBluel}
                    imgAlt={'Capture écran du site web Sophie Bluel'}
                    lienVersSite={`https://github.com/JessicaMeni/Projet3PortfolioArchitecteBluel`}
                    text={"Le portfolio de l'architecte Bluel m'a permis de développer une page web dynamique. Ce projet a été l'opportunité de concevoir une interface moderne et réactive en utilisant JavaScript, tout en respectant les besoins spécifiques d'une présentation visuelle élégante. J'ai implémenté des fonctionnalités dynamiques telles que des filtres de projets et des formulaires de contact interactifs. En travaillant sur ce projet, j'ai approfondi mes compétences en manipulation du DOM, en gestion d'événements et en interactivité utilisateur."}
                /> 
                <ProjetArticle
                    projetImgAlt={NinaCarducci375px}
                    imgSrc={NinaCarducci}
                    imgAlt={'Capture écran du site web Nina Carducci'}
                    lienVersSite={`https://jessicameni.github.io/Projet4Carducci/`}
                    text={"Ce projet avait pour but de débugger et optimiser le site de la photographe Carducci. Une de mes missions consistait à proposer des recommandations pour améliorer la vitesse de chargement de la page et la structure du code. J'ai pu mettre en application mes recommandations et ainsi améliorer la vitesse de chargement du site en convertissant les images au format nouvelle génération Webp, en minimisant ou retardant le chargement des fichiers volumineux. Mon autre mission était de proposer des recommandations pour améliorer le référencement (SEO) de la page sur les moteurs de recherche et l'accessibilité."}
                />
                <ProjetArticleGit
                    projetImgAlt={Kasa375px}
                    imgSrc={Kasa}
                    imgAlt={'Capture écran du site web Kasa'}
                    lienVersSite={`https://github.com/JessicaMeni/Projet5Kasa/tree/main/src`}
                    text={"Kasa est une plateforme de location de logement entre particuliers. J'ai eu pour mission de développer la partie front-end avec React, ainsi que la gestion d'API tout en respectant les contraintes techniques imposées. J'ai conçu une interface utilisateur fluide et moderne, tout en veillant à l'accessibilité et à la performance du site. Ce projet m'a également permis d'intégrer des systèmes de routage dynamique et de gérer efficacement les données des logements via une architecture claire et maintenable. Kasa illustre mon approche de la création de sites interactifs."}
                />
                <ProjetArticleGit
                    projetImgAlt={MonVieuxGrimoire375px}
                    imgSrc={MonVieuxGrimoire}
                    imgAlt={'Capture écran du site web Mon Vieux Grimoire'}
                    lienVersSite={`https://github.com/JessicaMeni/Projet6Grimoire/tree/c6031e70df255f3d22dbd2a5754ee4380fd6fba2/backend`}
                    text={"Mon Vieux Grimoire est une chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres. Le projet m'a permis, côté back-end, de développer une application de gestion de livres. J'ai conçu l'architecture de l'application en utilisant Node.js et MongoDB, permettant de gérer efficacement la base de données des livres, des utilisateurs, ainsi que leurs actions CRUD. Ce projet m'a permis de renforcer mes compétences en développement back-end, en gestion des bases de données et en création d'API robustes et sécurisées."}
                />
                <ProjetPlanification>
                </ProjetPlanification>
            </div>
        </section>
    )
}

export default Projets