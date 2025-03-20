import {useRef} from "react";
import './ProjetPlanification.scss'
import MMPpt from '../../assets/MenuMakerPpt.webp'
import MMDoc from '../../assets/MenuMakerDocTechnique.webp'
import MMNotion from '../../assets/MenuMakerNotion.webp'

function ProjetMiro() {
    const showButtonRef = useRef(null);
    const dialogRef = useRef(null);
    
    const handleClick = () => {
    dialogRef.current.showModal();
    };
    return (
        <article >
            <button className='project-article-button' ref={showButtonRef} onClick={handleClick}>
                <img className="projet-img-button" src={MMNotion} alt={"Carte de mes compétences"}></img>
            </button>
            <dialog ref={dialogRef} onClick={() => dialogRef.current.close()}>
                <button onClick={() => dialogRef.current.close()}>Cliquez pour fermer la boîte</button>
                <div className="projet-div-div">
                    <p>Projet : planifiez le développement du site de votre client.<br />
                    Au cours de ce projet, j&apos;ai réalisé un tableau Kanban, dans lequel j&apos;ai attribué aux équipes de développeurs front-end et back-end les tâches à accomplir en fonction des besoins utilisateurs du site. J&apos;ai également estimé la complexité de chaque tâche, ajouté une description claire et détaillé les spécifications techniques dans un document Word dédié.<br />
                        Ce document comprenait :
                            <ul><li>Les choix technologiques,</li>
                                <li>Des préconisations concernant le domaine et l&apos;hébergement,</li>
                                <li>Un point sur l&apos;accessibilité du site web,</li>
                                <li>Des recommandations en matière de sécurité et de maintenance, ainsi que les futures mises à jour.</li>
                            </ul>
                            Enfin, j&apos;ai préparé un support de présentation pour exposer l&apos;ensemble du projet.</p>
                    <div className="projet-div-img-menuMaker">
                        <img className='projet-img-menuMaker' src={MMNotion} alt={'Arbre de mes compétences'}></img>
                        <img className='projet-img-menuMaker' src={MMDoc} alt={'Arbre de mes compétences'}></img>
                        <img className='projet-img-notion' src={MMPpt} alt={'Arbre de mes compétences'}></img>
                    </div>
                </div>
            </dialog>
        </article>
    )
}

export default ProjetMiro;