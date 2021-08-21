import Dashboard from "../containers/Dashboard"

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

// install Swiper modules
SwiperCore.use([Navigation]);

const MySwiper = styled(Swiper)`
    width: 100%;

    .swiper-slide{
        padding: 0 15px;
        width: 100%;

        .payCard{
            height: 160px;
            border-radius: 20px;
            background-color: #123;
            overflow: hidden;
            padding: 15px;
            color: white;
        }
       
    }
`;


const Users = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = useSelector(state => state.cards);
    const card = cards[activeIndex];

    return (
        <div>
            <Dashboard menu={"cards"}>
                <h1>Cards</h1>
                <div class="row">
                    <div className="col-md-6">
                        <div className="shadow rounded p-3 mb-3">
                            <p className="fw-bold">Cards</p>
                            <div className="row">
                                <div className="col-md-8">
                                    <MySwiper navigation={true} updateOnWindowResize={true}
                                        className="mySwiper" onSlideChange={(e) => { setActiveIndex(e.activeIndex); }}>
                                        <SwiperSlide>
                                            <div className="payCard">
                                                Card 1
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="payCard">
                                                Card 2
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="payCard">
                                                Card 3
                                            </div>
                                        </SwiperSlide>
                                    </MySwiper>
                                </div>
                                <div className="col-md-4">
                                    <p>Card: {activeIndex + 1}</p>
                                    <p>Current balance: {card.currentBalance}</p>
                                    <p>Income: {card.income}</p>
                                    <p>Outcome: {card.outcome}</p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow rounded p-3 mb-3">
                            <p className="fw-bold">Transaction history</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="shadow rounded p-3 mb-3">
                            <p className="fw-bold">Goals</p>
                        </div>
                        <div className="shadow rounded p-3 mb-3">
                            <p className="fw-bold">Outcome Statistics</p>
                        </div>
                        <div className="shadow rounded p-3 mb-3">
                            <p className="fw-bold">New transaction</p>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </div>
    )
}

export default Users
