
import React, { useState } from "react";


export const Form = () => {


    const [startD, setStartD] = useState('')
    const [endD, setEndD] = useState('')
    const [company, setCompany] = useState('')
    const [shouldDraw, setShouldDraw] = useState(false)

    const handleSubmit = (event) => {

        event.preventDefault();
        const input = {
            "company": company, "startDate": startD, "endDate": endD, "drawLines": shouldDraw
        };

        fetch("http://localhost:5000/acceptDates", {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(console.log("WORKED"))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select class="formInput" id="selectMenu" onChange={e => setCompany(e.target.value)}>
                    <option value="" disabled="disabled" selected="selected">Company</option>
                    <option value="AAPL">AAPL</option>
                </select>


                <label> Start Date:</label>
                <input onChange={e => setStartD(e.target.value)} type="text" class="formInput" />
                <label> End Date:</label>
                <input onChange={e => setEndD(e.target.value)} type="text" class="formInput" />

                <input onChange={e => setShouldDraw(e.target.checked)}
                    type="checkbox" id="drawLines" name="drawLines" value="drawLines" />
                <label for="drawLines"> Draw Trade Lines </label>

                <input class="button" type="submit" value="submit" />
            </form>
        </div>
    );




}
