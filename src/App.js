import { useState } from 'react';
import WordRow from './components/WordRow/WordRow';
import './App.css';

function App() {

    const targetWords = [
        'dream',
        'unite',
        'guard',
        'paint',
        'glove',
    ];

    const rows = [0, 1, 2, 3, 4];


    const [activeWord, setActiveWord] = useState(0);
    const [activeRow, setActiveRow] = useState(0);

    const nextWord = () => {
        setActiveRow(0);
        setActiveWord(activeWord + 1);
    }

    return (
        <div className="w-100 vh-100 d-flex center-child-xy">
            <div className="container d-flex-col">
                { rows.map(i => <WordRow
                key={ i }
                targetWord={ targetWords[activeWord] }
                nextWord = { nextWord }
                setActiveRow = { setActiveRow }
                rowId={i}
                activeRow={ activeRow }/>) }
            </div>
        </div>
    );
}

export default App;