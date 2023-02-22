import { faAngular, faCss3, faHtml5, faReact, faGit, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About Me
                </h1>
                <p>
                    I am a very ambition student looking to become a software engineer. I am currently attending
                    Collin College and hoping to attend The University of Texas at Dallas, to finish my Computer Science Degree.
                </p>
                <p>
                    I am curious student always looking to learn new technologies. I always love
                    challenges because I do not stop trying until I complete the challenge.
                </p>
                <p>
                    I love everything technology and will always be looking for ways to improve or learn new technologies.
                </p>
            </div>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGit} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About