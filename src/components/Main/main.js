import React from 'react';
import './main.css';
import MainVideo from '../../../src/images/file.mp4'

function Main() {
    return (
        <main className='main'>
            <div className='container'>

                {/* <img src={MainVideo} alt=''/>    */}
                <video  autoPlay muted loop src={MainVideo} type="video/mp4"/>
            </div>
                
        </main>
    );
}

export default Main;