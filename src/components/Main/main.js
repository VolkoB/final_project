import React from 'react';
import './main2.css';
import MainVideo from '../../../src/images/file.mp4'
import CieloImage from '../../../src/images/TheCieloStory.webp'
import CollectionImage from '../../../src/images/ViewOurCollections.webp'
import JoinImage from '../../../src/images/JoinOurCom.webp'

function Main() {
    return (
        <main className='main'>
            <div className='container'>
                <div className='tiles'>
                    <div className='tile'>
                        <h2 className='shop-tile'>Introducing Your New Workout Wardrobe</h2>
                        <button className='shop-button'>Start Shopping</button>
                    </div> 
                    <div className='tile feature'>
                        <video  autoPlay muted loop src={MainVideo} type="video/mp4"/>
                    </div>
                    <div className='tile'>
                        <img src={CieloImage} alt=''/>
                    </div>
                    <div className='tile'>
                        <img src={CollectionImage} alt=''/>
                    </div>
                    <div className='tile'>
                        <img src={JoinImage} alt=''/>
                    </div>
                   
                </div>
                {/* <h2 className='latest-heading'>LATEST ARRIVALS</h2> */}
            </div>
                
        </main>
    );
}

export default Main;