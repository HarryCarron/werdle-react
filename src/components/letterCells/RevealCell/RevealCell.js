export default function RevealCell(letter, mode) {
    
    let cellClass;

    switch(mode) {
        case 0: {
            cellClass = "exact-match";
            break;
        }
        case 1: {
            cellClass = "non-exact-match";
            break;
        }
        default: {
            cellClass = "no-match";
            break;
        }
    }
    
    return (<div className="cell">
        <div className="flip-card-inner flip">
            <div className="flip-card-front d-flex center-child-xy">
                {letter}
            </div>
            <div className={"flip-card-back d-flex center-child-xy " + cellClass}>
                {letter}
            </div>
        </div>
    </div>);
}