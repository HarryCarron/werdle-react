
export default function StandardCell(letter, shouldJump) {

    let classList = "letter-cell d-flex center-child-xy ";
    classList += shouldJump ? 'jump' : '';

    return (<div className={ classList }>{ letter }</div>);
}
