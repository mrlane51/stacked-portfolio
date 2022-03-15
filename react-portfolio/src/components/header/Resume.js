import React from 'react'
import { ExternalLink} from 'react-external-link'
// import resume from '../../assets/resume.pdf'

const Resume = () => {
    return (
    <div className='resume'>
        {/* <a href='{ resume } download'>Download Resume</a> */}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        <ExternalLink  className='btn' href='https://rebrand.ly/r1ckr0l13r'> <h4>Resume</h4> </ExternalLink>
    </div>
    )
}

export default Resume