import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Combo del dia</h1>
            <p>Hamburguesa doble con queso</p>
            <FeatureButton>Ordena ya</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
