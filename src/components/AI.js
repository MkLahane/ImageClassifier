import { useContext } from 'react';
import AIContext from '../contexts/AIContext';
import './ai.css';

const AI = () => {
    const { setNumberOfClasses } = useContext(AIContext);
    const MAX_CLASSES = 5;
    const NUM_CLASSES = [];
    for (let i = 0; i < MAX_CLASSES; i++) {
        NUM_CLASSES.push(<option value={i + 2}>{i + 2}</option>);
    }
    return (
        <div className='ai'>
            <h1>Hey! I am an Image Classifier</h1>
            <div className='ai-options'>
                <div className='select-div'>
                    <select onChange={(e) => {
                        const val = parseInt(e.target.options[e.target.selectedIndex].text);
                        setNumberOfClasses(val);
                    }}>
                        {NUM_CLASSES}
                    </select>
                </div>
                <button>Train</button>
            </div>
        </div >
    );
};

export default AI;