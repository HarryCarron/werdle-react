import { useState, useRef } from 'react';
import WordRow from './components/WordRow/WordRow';
import './App.css';

function App() {

    const rawWords = [
        'pears',
        'smelt',
        'lends',
        'needs',
        'dream'
    ];

    const words = useRef(rawWords.map(word => word.split('')));

    const [activeRow, setActiveRow] = useState(0);

    return (
        <div className="w-100 vh-100 d-flex center-child-xy">
            <div className="container d-flex-col">
                { words.current.map((word, i) => <WordRow targetWord={ rawWords[4] } setActiveRow={ setActiveRow } rowId={i} activeRow={ activeRow } key={i} word = { word }/>) }
            </div>
        </div>
    );
}

export default App;