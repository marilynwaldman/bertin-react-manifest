

import React, { useState, RefObject, useEffect, useRef , useContext} from 'react';
import { MapContext } from '../../widgets/MapWidget/MapWidget';
import {Sidebar, Title} from '../ui/ui'
import { JSONTree } from 'react-json-tree';



const Properties: React.FC = () => {

    
    return (
        <div>
            <Title>Properties</Title>
            
                          
        </div>
    )
}


export const RightSidebar: React.FC = () => {
    const {manifests, setManifests} = useContext(MapContext) as any
    const {bertinType, setbertinType} = useContext(MapContext) as any
    
    var manifest = {}
    

    const theme = {
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        alignItems:'Right',
       
    }    
      

    if( manifests !=null ){
        manifest = manifests[bertinType]
    }    
    


    return (
        <Sidebar>
            <Properties/>
            <JSONTree 
                
                hideRoot={true}
                data={manifest}
                theme={theme} invertTheme={true}
              
            />
            
        </Sidebar>
       )
}
