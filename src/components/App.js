import './App.css';
import {useState} from "react";
import PopUp from "./popup/PopUp";

function App() {
    const firstNumber = 8
    const secondNumber = 10
    const array = [5, 12, 18]
    const [isShowPopUp, setIsShowPopUp] = useState(false)
    const [resultArray, setResultArray] = useState([])
    const onRunClick = () => {
        setResultArray([...array, (firstNumber + secondNumber)])
        setIsShowPopUp(true)
    }
    const printArray = (array) => {
        return array.map((item, index) => {
            return <p key={`${item}${index}`}>{item} {index < array.length - 1 ? ', ' : ''}</p>
        })
    }
    return (
        <div className="app_wrapper">
            <div className="container">
                <div className="number_block array">
                    {printArray(array)}
                </div>
                <div className="number_section">
                    <div className="number_block number_item">
                        {firstNumber}
                    </div>
                    <div className="number_block number_item">
                        {secondNumber}
                    </div>
                </div>
                <div className="button"
                     onClick={onRunClick}
                     data-testid="run-button">
                    Выполнить
                </div>
            </div>
            <PopUp isShowPopUp={isShowPopUp} setIsShowPopUp={setIsShowPopUp} resultArrayList={printArray(resultArray)}/>
        </div>
    );
}

export default App;
