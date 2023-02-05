import React, { useContext } from 'react'
import { Sidebar, Title } from '../ui/ui'
import styled from 'styled-components'
import DropzoneCSVComponent from '../FileUpload/DropzoneCSVComponent'
import DropzoneCSVFiles from '../FileUpload/DropzoneCSVFIles'
import { Modal } from '@material-ui/core'
import SimpleModal from '../modal'
import Button from '@material-ui/core/Button';
import BertinList from '../BertinList/BertinList'




export const LeftSidebar: React.FC = () => {
    return (
        <Sidebar>
            <Title>Bertin.js Thematic Maps</Title> 
            <BertinList/>                
        </Sidebar>
    )
}
