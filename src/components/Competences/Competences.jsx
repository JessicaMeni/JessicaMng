import './Competences.scss'
import frontend from '../../assets/outils-web-dev-frontend.webp'
import backend from '../../assets/outils-web-dev-backend.webp'

function Competences() {
    return (
        <section id='skills'>
            <h2>Mes compétences</h2>
            <div className='skills-div'>
                <figure>
                    <img className='img-skills-frontend' src={frontend} alt="logos d'outils front-end"></img>
                <figcaption>Front-end</figcaption>
                </figure>
                <figure>
                    <img className='img-skills-backend' src={backend} alt="logos d'outils back-end"></img>
                <figcaption>Back-end</figcaption>
                </figure>
            </div>
            <div className='container'>
                <div className='container-div'>
                    <i className="fa-solid fa-panorama"></i>
                    <h3>Front-End</h3>
                    <p>Ma formation de Développeur Web orientée sur des projets concrets, m&apos;a permis de concevoir des sites web reponsives et dynamiques, adaptés à tous les écrans. 
                    En me basant sur les maquettes graphiques des projets, j&apos;ai principalement travaillé avec des technologies clés comme <strong>HTML, CSS, JavaScript et React</strong> pour concevoir des solutions performantes et attractives.</p>
                </div>
                <div className='container-div'>
                    <i className="fa-solid fa-server" ></i>
                    <h3>Back-End</h3>
                    <p>Au cours de mes projets j&apos;ai travaillé sur la création de sites web complets et dynamiques, tout en veillant à leur bon fonctionnement grâce à <strong>Node.js</strong> et <strong>Express</strong> côté serveur. 
                    J&apos;ai aussi développé des API et structuré des bases de données avec <strong>MongoDB</strong>, pour répondre efficacement aux besoins des utilisateurs.</p>
                </div>  
                <div className='container-div'>
                    <i className="fa-solid fa-chart-line"></i>
                    <h3>Performance</h3>
                    <p>J&apos;ai pu expérimenter <strong>l&apos;optimisation</strong> des <strong>performances</strong> et la maintenance de site web existants, des actions essentielles pour garantir leur bon fonctionnement et améliorer leur visibilité sur les moteurs de recherche grâce à une stratégie <strong>SEO</strong> efficace.</p>
                </div>
            </div>
            
        </section>
    )
}

export default Competences