import React from 'react'
import Navigation from './utilis/Navigation'
import Shader from './utilis/Shader'
import OIcon from './utilis/OIcon';
import Slogan from './utilis/Slogan';

function Hero({ title, slogan , nav }) {
    return (
        <section className="snap-start">
            <div className='h-screen'>

                <Shader />
                <div className='w-full max-w-screen h-full absolute top-0 left-0'>
                    <div className='mt-[15.28vh]'>
                        <Navigation {...nav}/>
                    </div>

                    <div>
                        <Slogan title={title} slogan={slogan}/>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero