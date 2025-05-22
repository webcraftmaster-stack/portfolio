import Banner from './Banner';
import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';

import React from 'react'

export default function Dashboard() {
    return (
        <>
            <Banner />
            <Services />
            <Portfolio />
            <About />
            <Resume />
        </>
    )
}