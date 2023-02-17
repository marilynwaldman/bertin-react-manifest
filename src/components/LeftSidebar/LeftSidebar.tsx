import React, { useContext } from 'react'
import { Sidebar, Title } from '../ui/ui'
import BertinList from '../BertinList/BertinList'




export const LeftSidebar: React.FC = () => {
    return (
        <Sidebar>
            <Title>Bertin.js Thematic Maps</Title> 
            <BertinList/>                
        </Sidebar>
    )
}
