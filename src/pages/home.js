import React, { useState } from 'react'
import Layout from '../components/Layout'
import WishListCard from '../components/WishListCard'
import AddNew from '../components/AddNew'
import CreateNewList from '../components/CreateNewList'
import RemoveElement from '../components/RemoveElement'
import ConfirmDelete from '../components/ConfirmDelete'
import '../styles/home.css'

export default function Home() {

    const [ creatingNewElement, setCreatingNewElement ] = useState(false)
    const [ draggingState, setDraggingState ] = useState({dragging: false, draggingOverRemoveElement: false})
    const [ confirmState, setConfirmState ] = useState(true)
    const [ confirmReturn, setconfirmReturn ] = useState(false)

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

    function changeConfirmState(trueFalse){
        setConfirmState(trueFalse)
    }

    function changeConfirmReturn(trueFalse){
        setconfirmReturn(trueFalse)
    }

    return (
        <>  
            <div style={{width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column'}}>  
                <Layout title="Listas de Deseos">
                    <CreateNewList displayed={creatingNewElement}  handler={changeCreatingState}/>
                    <ConfirmDelete confirmState={confirmState} elementName='ejemplo' changeConfirmReturn={changeConfirmReturn}/>
                    <div className='cards'>

                        <WishListCard color='3' title='Lista ejemplo 1' items='10 items' 
                        draggHandler={ e => changeDraggingState(e)} draggingState={draggingState} setConfirmState={changeConfirmState} confirmReturn={confirmReturn}/>
                        <AddNew handler={changeCreatingState} dragging={draggingState.dragging}/>
                        <RemoveElement dOverHandler={ e => draggOverHandler(e) } dOutHandler={ e => draggOutHandler(e) } dragging={draggingState.dragging}/>

                    </div>

                </Layout>
            </div>
        </>
    )
}
