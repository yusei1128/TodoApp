import React,{useState} from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')
   const handleSubmit = e => {
        // formを送信(Submit)した際の処理を記述します。
        e.preventDefault()
        addTodo(value)
    
        const textareaform=document.getElementById("tuika")
        textareaform.value=""
   }
    return (
        <form onSubmit={handleSubmit}> 
            <input type='text' id="tuika"
            onChange={e => {
            setValue(e.target.value)
            }} 
            />
            
        </form>
    );
}

export default Form
