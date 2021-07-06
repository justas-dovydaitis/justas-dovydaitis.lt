import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CanvasImage } from './components/CanvasImage/CanvasImage.jsx';
import { Frame } from './components/Frame/Frame.jsx';
import { Header } from './components/Header/Header.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { NavigationItem } from './components/Navigation/NavigationItem.jsx';
import { Page } from './components/Page/Page.jsx';
import { Parallax } from './components/Parallax/Parallax.jsx';

import './App.scss';
import image from './assets/portrait-michael.jpg';
import aboutPage from './assets/pages/About.md';
import experiencePage from './assets/pages/Experience.md';
import educationPage from './assets/pages/Education.md';
import contactPage from './assets/pages/Contact.md';

function App() {
    const [height, setHeight] = useState(0);
    const backgroundEl = useRef(null);

    useEffect(() => {
        setHeight(backgroundEl.current.offsetHeight);
    });

    return (
        <>
            <div ref={backgroundEl} className='background'>
                <Parallax ratio={0.02} center={true}>
                    <CanvasImage
                        imagePath={image}
                        width={height}
                        heigh={height}
                    />
                </Parallax>
            </div>

            <Parallax ratio={-0.001} center={false}>
                <Frame>
                    <Header />
                    <Router>
                        <Switch>
                            <Route path='/about'>
                                <Page pagePath={aboutPage} />
                            </Route>
                            <Route path='/education'>
                                <Page pagePath={educationPage} />
                            </Route>
                            <Route path='/experience'>
                                <Page pagePath={experiencePage} />
                            </Route>
                            <Route path='/contact'>
                                <Page pagePath={contactPage} />
                            </Route>
                        </Switch>

                        <footer>
                            <Navigation>
                                <NavigationItem to='/about'>
                                    About
                                </NavigationItem>
                                <NavigationItem to='/education'>
                                    Education
                                </NavigationItem>
                                <NavigationItem to='/experience'>
                                    Experience
                                </NavigationItem>
                                <NavigationItem to='/contact'>
                                    Contact
                                </NavigationItem>
                            </Navigation>
                        </footer>
                    </Router>
                </Frame>
            </Parallax>
        </>
    );
}

export default App;
