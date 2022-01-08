import './Card.css'

const Card = ({card, handleChoice, flipped, disabled}) => {

    let {name, img, id, type1, type2 } = card

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className='card' >
            <div className={`card-body ${flipped ? 'flipped' : '' }`}>
                <div className='front' style={{backgroundImage: `linear-gradient( 60deg, ${type1} 30%, ${type2 ? type2 : type1 })`}}>
                    <img className='card-img' src={img} alt={`${name} sprite`} />
                </div>
                <div onClick={handleClick} className='back'>
                    <img className='card-img cover' src="/images/pokeball.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Card;
