import { useState, useContext, useEffect } from 'react';
import AIContext from '../contexts/AIContext';
import Class from './Class';
import './classes.css';

const getEmptyArray = (n) => {
    return new Array(n).fill(0);
};

const Classes = () => {
    const { numberOfClasses } = useContext(AIContext);
    const [classes, setClasses] = useState(getEmptyArray(numberOfClasses));

    useEffect(() => {
        setClasses(getEmptyArray(numberOfClasses));
    }, [numberOfClasses])
    return (
        <div className='classes-container'>
            <div className='classes'>
                {
                    classes.map((v) =>
                        <Class key={v} />
                    )
                }
            </div>
        </div>
    );
};

export default Classes;