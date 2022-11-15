import React, { useState } from 'react'
import Layout from '../components/Layout'
import WishListCard from '../components/WishListCard'
import AddNew from '../components/AddNew'
import CreateNewList from '../components/CreateNewList'
import '../styles/home.css'

export default function Home() {

    const [ creatingNewElement, setCreatingNewElement ] = useState(false)

    function changeCreatingState(){
        setCreatingNewElement(prev => !prev)
    }

    return (
        <>  
            <div style={{width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column'}}>  
                <Layout title="Listas de Deseos">

                    <CreateNewList displayed={creatingNewElement}  handler={changeCreatingState}/>

                    <div className='cards'>
                        
                        <WishListCard color='3' title='Lista ejemplo 1' items='10 items' />
                        <AddNew handler={changeCreatingState} />

                    </div>

                </Layout>
            </div>
        </>
    )
}
