import {useRef} from "react";
import PropTypes from 'prop-types';
import './ProjetArticle.scss'

function ProjetArticle({ imgSrc, projetImgAlt, lienVersSite, imgAlt, text }) {
    const showButtonRef = useRef(null);
    const dialogRef = useRef(null);
    
    const handleClick = () => {
    dialogRef.current.showModal();
    };
    return (
        <article >
            <button className='project-article-button' ref={showButtonRef} onClick={handleClick}>
                <img className="projet-img-button" src={projetImgAlt} alt={imgSrc}></img>
            </button>
            <a href={lienVersSite} target="_blank">Cliquez pour voir le site</a>
            <dialog ref={dialogRef}>
                <button onClick={() => dialogRef.current.close()}>Cliquez sur l&apos;image pour fermer</button>
                <div className="projet-div-img">
                    <p>{text}</p>
                    <img className='projet-img-modal' src={imgSrc} alt={imgAlt} onClick={() => dialogRef.current.close()}></img>
                </div>
                
            </dialog>
        </article>
    )
}

ProjetArticle.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    projetImgAlt: PropTypes.string.isRequired,
    lienVersSite: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ProjetArticle;