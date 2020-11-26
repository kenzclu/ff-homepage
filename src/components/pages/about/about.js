import React from 'react'
import Page from '../../atoms/page/Page'

function About() {
    return (
        <Page back>
            <h1>KENNETH</h1>
            <h2>JOB</h2>
            <div>PRIMARY: Computer Science student</div>
            <div>SECONDARY: Software Developer</div>
            <h2>DESCRIPTION</h2>
            <div>
                Hailing from the lands of the sheep, Knew Zilland. Kenneth is a penultimate student
                studying Computer Science at an academy known as University of New South Whales. The academy
                is situated in Ozstralia, a dangerous country where terrifying beasts known as "Drop Bears" 
                rule the land.
            </div>
            <div>
                It is now the 21st century, and Kenneth has decided to take up arms and rid the
                country of its treacherous tyrants. Over at the academy, Kenneth has learned and "mastered"
                many technologies and skills in preparation. 
            </div>
            <h2>SKILLS</h2>
            <ul>
                <li>Web Development (ReactJS, Typescript)</li>
                <li>AWS (EC2, EB)</li>
                <li>Rest APIs (NodeJS, Python)</li>
                <li>Databases (PostgreSQL)</li>
            </ul>
        </Page>
    )
}

export default About
