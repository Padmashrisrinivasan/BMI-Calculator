import React, { useState } from "react";
import "./App.css";

function App() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [condition, setCondition] = useState("");

    const Calculate = () => {
        if (!height || !weight) {
            alert("Fill in the inputs");
        } else {
            let bmi1 = Math.round(weight / (height ** 2));
            setBmi(bmi1);

            let condition1 = "";
            if (bmi1 < 19) {
                condition1 = "Under Weight";
            } else if (bmi1 >= 19 && bmi1 <= 25) {
                condition1 = "Normal Weight";
            } else if (bmi1 >= 26 && bmi1 <= 30) {
                condition1 = "Over Weight";
            } else {
                condition1 = "Obesity";
            }
            setCondition(condition1);
        }
    };

    return (
        <div className="div1">
            <div className="container">
                <div className="title">
                    <h2><b><center>Body Mass Index (BMI) Calculator</center></b></h2>
                    </div>
                    <div className="inputs"><br/>
                        
                            <b>Height (m) </b><br/>
                            <input
                                type="number"
                                placeholder="  Enter Your Height (m)"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        <br/>
                       
                            <b>Weight (kg) </b><br/>
                            <input
                                type="number"
                                placeholder="  Enter Your Weight (kg)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        <br/><center>
                        <button className="calc" onClick={Calculate}><b>Compute BMI</b></button><br/><br/>
                        </center>
                            <input type="text" value={bmi} readOnly/>
                        <br/>
                        {condition && ( 
                              <label><b>Condition :</b> {condition}</label>
                        
                        )}
                    </div>
                </div>
            </div>
        
    );
}

export default App;
