import {useRef} from "react";
import PropTypes from 'prop-types';
import './ProjetArticle.scss'

function ProjetArticle({ imgSrc, imgAlt, text }) {
    const showButtonRef = useRef(null);
    const dialogRef = useRef(null);
    
    const handleClick = () => {
    dialogRef.current.showModal();
    };
    return (
        <article >
            <button className='project-article' ref={showButtonRef} onClick={handleClick}>
                <img className="projet-img-button" src={imgSrc} alt={imgAlt}></img>
            </button>
            <dialog ref={dialogRef}>
                <img className='projet-img-modal' src={imgSrc} alt={imgAlt}></img>
                <p>{text}</p>
                <button onClick={() => dialogRef.current.close()}>Fermer</button>
            </dialog>
        </article>
    )
}

ProjetArticle.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ProjetArticle;