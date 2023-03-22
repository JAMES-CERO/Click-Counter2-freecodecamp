
const Buttom = ({text, isClick, useClick}) => {
    return (
            <button className={isClick ? 'buttomClick' : 'resetButtom'}
            onClick={useClick}>
                {text}
            </button>  
    )
}

export default Buttom