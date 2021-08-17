
import React from 'react'
import { Slide } from "react-awesome-reveal";
import CardsContainerWrapper from './CardsContainerWrapper'

const CardsContainer = () => {
    return (
        <CardsContainerWrapper>
            <h1>Cards</h1>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Users</h2>
                    </Slide>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Todos</h2>
                    </Slide>
                </div>
                <div className="col-sm-6 col-md-4">
                    <Slide className="p-4 rounded shadow">
                        <h2>Albums</h2>
                    </Slide>
                </div>
            </div>
        </CardsContainerWrapper>
    )
}

export default CardsContainer
