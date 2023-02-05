import React, { RefObject, useContext, useRef} from 'react'
import styled from 'styled-components'
import { MapContext } from '../../widgets/MapWidget/MapWidget'
import  { D3Map }   from '../D3Map/D3Map'
import { LayerList } from '../LayerList/LayerList'


//import {ElementsContext} from './App'

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;
`

export const Canvas: React.FC = () => {
    
    //const nodeRef: RefObject<HTMLDivElement> = React.createRef()
    

    

    return (
        <CanvasContainer>    
            <D3Map />  
            <LayerList></LayerList>
        </CanvasContainer>
    )
}