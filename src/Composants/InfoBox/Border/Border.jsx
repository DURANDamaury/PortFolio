import "./Border.scss";
function Border({position, boxState, Id})
    {
        //number of lines
        const lines=[0,1,2,3,4,5,6,7,8,9,10];

        return (
            <div className={`InfoBox_Header_${position}_Border_${boxState}`}>
                {
                lines.map((linenumber) => (
                        <div className="Border_line" key={`${Id}_border_line_${linenumber}`}></div>
                    ))
                }
            </div>
        );
    }

export default Border;