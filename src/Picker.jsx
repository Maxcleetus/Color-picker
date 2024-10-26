import React , {useState} from "react";

function Picker(){

    const [pic , picking] = useState("#ffffff")
    function pick(event){
        picking(event.target.value)
        
    }

    return(
        <>
            <div className="container">
                <h1 className="title">COLOR PICKER</h1>
                <div className="conatiner" style={{backgroundColor: pic}}>
                <p>color : {pic}</p>
                </div>
                <label className="pic" >PICK A COLOR</label>
                <input type="color" value={pic} onChange={pick}/>    
            </div>
           
        </>
        
    )
}
export default Picker