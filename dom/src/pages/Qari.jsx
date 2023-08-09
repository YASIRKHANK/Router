

import React, { useState } from 'react';

const Qari = () => {
    const [displayText, setDisplayText] = useState("my name is");
    const [next, setNext] = useState(true);
    const additionalData = [
        "yasir khan",
        "yAfridi",
        "i am from",
        "mardan"
    ];
    const [dataIndex, setDataIndex] = useState(0);

    const handleNext = () => {
        if (dataIndex < additionalData.length) {
            setDisplayText(displayText + "\n" + additionalData[dataIndex]);
            setDataIndex(dataIndex + 1);
        } else {
            setNext(false);
        }
    };

    return (
        <div className='p-12'>
            <pre>{displayText}</pre>
            {next && (
                <button
                    className='text-white bg-[#000032] px-4 py-1 rounded-md'
                    onClick={handleNext}
                >
                    Next
                </button>
            )}
        </div>
    );
};

export default Qari;



