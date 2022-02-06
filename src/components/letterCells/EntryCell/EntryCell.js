export default  function EntryCell(onLetterEntry) {
    return (<div className="letter-cell d-flex center-child-xy entry-cell pulse">
        <input onChange={e => onLetterEntry(e)} className="w-100 entry" autoFocus="autofocus"/>
    </div>);
}
