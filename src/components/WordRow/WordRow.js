import './WordRow.css';
import { useEffect, useRef, useState } from 'react';
import EntryCell from './../letterCells/EntryCell/EntryCell';
import RevealCell from './../letterCells/RevealCell/RevealCell';
import StandardCell from './../letterCells/StandardCell/StandardCell';

export default function WordRow(props) {

    const cellsX = [0, 1, 2, 3, 4];

    let cells = useRef([]);

    const [update, setUpdate] = useState(0);
    const [letterEntry, setLetterEntry] = useState([]);

    useEffect(() => {
        cells.current = cellsX.map(_ => StandardCell());
        setUpdate(!update);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setLetterEntry([]);
        cells.current = cellsX.map(_ => StandardCell());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.targetWord]);

    useEffect(() => {
        if (letterEntry.length === 5) {
            if (letterEntry.join('') === props.targetWord) {
                setTimeout(_ => props.nextWord(), 1000);
                
            } else {
                props.setActiveRow(props.rowId + 1);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [letterEntry])

    const onLetterEntry = (event) => {
        const value = event.target.value;
        setLetterEntry([...letterEntry, value]);
    }

    const getRevealCells = (entry) => {

        const targetLetters = props.targetWord.split('');

        return entry.map((letter, i) => {
            let mode;
            if (letter === targetLetters[i]) {
                mode = 0;
            } else if (targetLetters.includes(letter)) {
                mode = 1;
            } else {
                mode = 2;
            }

            return RevealCell(letter, mode);
        })
    }

    const getEntryCells = () => {
        return cellsX.map((_, i) => letterEntry.length === i ? EntryCell(onLetterEntry) : StandardCell(letterEntry[i], i === (letterEntry.length - 1)));
    }

    if (props.rowId === props.activeRow) {
        if (letterEntry.length === 5) {
            cells.current = getRevealCells(letterEntry);
        } else {
            cells.current = getEntryCells(letterEntry);
        }
    }

    return (
        <div className ="d-flex">
            { cells.current.map((Cell, i) => <div key={i}>{Cell}</div>) }
        </div>
    );
}
