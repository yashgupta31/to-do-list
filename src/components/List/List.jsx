import React, { useState } from 'react'
import './List.css'
import {RiDeleteBin6Fill} from "react-icons/ri"

const List = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [color, setColor] = useState()

    const addItem = (e) => {
        e.preventDefault();
        //only print value if value typed in input field
        input && (
            setList([...list, input]),
            setInput('')
        );
    }

    //Deleted single item
    const deleteItem = (id) => {
        const updatedItems = list.filter((element, ind) => {
            return ind !== id;
        } )
        setList(updatedItems)     
    }

    //Delete All items
    const clearAll = () => {
        setList([])
    }

    

    return (
        <div className='list-container' style={{ backgroundColor: color }}>

            <h2>To Do List</h2>
            <form onSubmit={addItem} >
                <input type="text" placeholder='Add New Item' title='Add New Item' value={input} onChange={(e) => setInput(e.target.value)} />
                {input && (<button>Add</button>)}    
                
            </form>

            <div className='show-item-container'>

                {
                list.map((item, index) => {
                        return (
                            <div className='each-item' key={index}>
                                <input type="checkbox" id='check' />
                                <h3 className='name'>{item}</h3>
                                <RiDeleteBin6Fill className='row-delete' onClick={() => deleteItem(index)} />
                            </div>
                        )
                    })
                }
                
            </div>
            {list.length > 0 ?
            (<button onClick={clearAll} className='clear-all'>Clear All</button>):
            (<><div> 
                <h2>Write Something...!</h2>
                </div>

            <div className='color-container'>
            <button className='changeColor' onClick={() => setColor('rgb(71, 59, 100)')} style={{ backgroundColor: 'rgb(71, 59, 100)' }}>   
            </button>
            <button className='changeColor' onClick={() => setColor('rgb(171, 97, 0)')} style={{ backgroundColor: 'rgb(171, 97, 0)' }}>   
            </button>
            <button className='changeColor' onClick={() => setColor('rgb(0, 159, 117)')} style={{ backgroundColor: 'rgb(0, 159, 117)' }}>   
            </button>
            <button className='changeColor' onClick={() => setColor('rgb(95, 96, 1)')} style={{ backgroundColor: 'rgb(95, 96, 1)' }}>   
            </button>
            <button className='changeColor' onClick={() => setColor('rgb(148, 2, 72)')} style={{ backgroundColor: 'rgb(148, 2, 72)' }}>   
            </button>
            </div></>
            )}


        </div>

    )
}

export default List