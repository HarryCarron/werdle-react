import './WordRow.css';
import { useEffect, useRef, useState } from 'react';

export default function WordRow(props) {

    let cells = useRef([]);

    let [render, setRender] = useState(0);

    useEffect(() => {
        cells.current = props.word.map(_ => StandardCell);
        setRender(!render);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [letterEntry, setLetterEntry] = useState([]);

    const onLetterEntry = (event) => {
        const value = event.target.value;
        setLetterEntry([...letterEntry, value]);
    }

    const getRevealCells = (entry) => {

        const targetLetters = props.targetWord.split('');

        return entry.map((e, i) => {
            if (e === targetLetters[i]) {
                return ExactMatchFilledCell;
            }
            if (targetLetters.includes(e)) {
                return NonExactMatchFilledCell;
            }
            return NoMatchCell;
        })
    }

    if (props.rowId === props.activeRow) {
        if (letterEntry.length === 5) {
            cells.current = getRevealCells(letterEntry);
            props.setActiveRow(props.rowId + 1);
        } else {
            cells.current = props.word.map((_, i) => letterEntry.length === i ? EntryCell : StandardCell);
        }
    }

    let classList = "w-100 d-flex flex-1 ";
    classList += props.isActiveRow ? 'active-row' : '';

    return (
        <div className = { classList }>
            { cells.current.map((Cell, i) => <Cell {...props} letter={letterEntry[i]} onLetterEntry={ onLetterEntry }/>) }
        </div>
    );
}

function StandardCell({letter}) {
    return (<div className="letter-cell d-flex center-child-xy">{ letter }</div>);
}

function ExactMatchFilledCell({letter}) {
    return (<div className="letter-cell d-flex center-child-xy exact-match">{letter}</div>);
}

function NonExactMatchFilledCell({letter}) {
    return (<div className="letter-cell d-flex center-child-xy non-exact-match">{letter}</div>);
}

function NoMatchCell({letter}) {
    return (<div className="letter-cell d-flex center-child-xy non-exact-match no-match">{letter}</div>);
}

function EntryCell({onLetterEntry}) {
    return (<div className="letter-cell d-flex center-child-xy">
        <input onChange={e => onLetterEntry(e)} className="w-100 entry" autoFocus="autofocus"/>
    </div>);
}
