import React, { useState } from 'react'
import Layout from '../components/Layout'
import WishListCard from '../components/WishListCard'
import AddNew from '../components/AddNew'
import CreateNewList from '../components/CreateNewList'
import RemoveElement from '../components/RemoveElement'
import '../styles/home.css'

export default function Home() {

    const [ creatingNewElement, setCreatingNewElement ] = useState(false)
    const [ draggingState, setDraggingState ] = useState({dragging: false, draggingOverRemoveElement: false})


    function changeCreatingState(){
        setCreatingNewElement(prev => !prev)
    }

    function changeDraggingState(e){
        setDraggingState(prev => {
            return { ...prev, draggedElement: e.target, dragging: !prev.dragging }
        })
    }

    function draggOverHandler(e){
        e.preventDefault()
        setDraggingState(prev => {
            return { ...prev, draggingOverRemoveElement: true }
        })
    }

    function draggOutHandler(e){
        setDraggingState(prev => {
            return { ...prev, draggingOverRemoveElement: false }
        })
    }

    return (
        <>  
            <div style={{width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column'}}>  
                <Layout title="Listas de Deseos">
                    <CreateNewList displayed={creatingNewElement}  handler={changeCreatingState}/>
                    <div className='cards'>

                        {
                            fetch('http://localhost:3000/lists')
                            .then(res => res.json)
                            .then(res => {
                                console.log(res)

                                res.map( item => {
                                    return (
                                        <WishListCard id={item._id} color={item.color} title={item.nombre_lista} items={item.elementos.length} 
                                        draggHandler={ e => changeDraggingState(e)} draggingState={draggingState}/>
                                    )
                                })
                            })    
                        }

                        <AddNew handler={changeCreatingState} dragging={draggingState.dragging}/>
                        <RemoveElement dOverHandler={ e => draggOverHandler(e) } dOutHandler={ e => draggOutHandler(e) } dragging={draggingState.dragging}/>

                    </div>

                </Layout>
            </div>
        </>
    )
}
