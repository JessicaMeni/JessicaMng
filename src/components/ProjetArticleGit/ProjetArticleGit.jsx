import {useRef} from "react";
import PropTypes from 'prop-types';
import '../ProjetArticle/ProjetArticle.scss'

function ProjetArticleGit({ imgSrc, projetImgAlt, lienVersSite, imgAlt, text }) {
    const showButtonRef = useRef(null);
    const dialogRef = useRef(null);
    
    const handleClick = () => {
    dialogRef.current.showModal();
    };
    return (
        <article >
            <button className='project-article-button' ref={showButtonRef} onClick={handleClick}>
                <img className="projet-img-button" src={projetImgAlt} alt={imgAlt}></img>
            </button>
            <a href={lienVersSite} target="_blank">Cliquez pour voir le code sur GitHub</a>
            <dialog ref={dialogRef} onClick={() => dialogRef.current.close()}>
                <button onClick={() => dialogRef.current.close()}>Cliquez pour fermer la boîte</button>
                <div className="projet-div-img">
                    <p>{text}</p>
                    <img className='projet-img-modal' src={imgSrc} alt={imgAlt}></img>
                </div>
                
            </dialog>
        </article>
    )
}


ProjetArticleGit.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    projetImgAlt: PropTypes.string.isRequired,
    lienVersSite: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ProjetArticleGit;