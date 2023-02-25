import "./Border.scss";
function Border()
    {
        //Generate lines in borders
        const lines=[];
        //simple loop pushing jsx on array
        for(let i=0 ; i<11 ; i++){lines.push(<><div className="Border_line"></div><div className="Border_line_space"></div></>)}

        

        return (
            <>
                {lines}
                <div className="Border_line"></div>
            </>
        );
    }

export default Border;