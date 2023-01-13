import {BsFillFileEarmarkMusicFill, BsFillBootstrapFill} from "react-icons/bs"
import {SiJavascript, SiCss3, SiReact, SiMongodb, SiHtml5, SiExpress, SiDjango, SiPostgresql, SiMaterialui, SiPython} from "react-icons/si"
import { CiWavePulse1 } from "react-icons/ci"
import { motion } from "framer-motion"
import SteveReichVid from '../img/stevereichpendulum.mov'

const Unravel = (props) => {

    return (
        <>
        <div className='project-container'>
            {/* <img src={SoundcacheGif} id="soundcache-gif"/> */}
            <motion.div className='vid-container'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}>
                <video src={SteveReichVid} autoplay="true" loop="true" muted className='product-vid'/>
            </motion.div>
            <div className='project-details'>
                    <div className="project-logo-box" id="unravel-logo-box">
                        <CiWavePulse1 className="project-icon" size={'2.5em'}/>
                        <h1 className='project-title'>unravel</h1>
                    </div>
                    <div className='project-details-description'>
                        <p> I'm very excited to deploy unravel in the coming weeks. unravel is an application which utilizes algorithms and randomization to propagate spontaneous soundscapes and melodies. The result is the production of evolving and ever-changing music generated by the interconnection of computer software and user input.</p>
                    </div>
                        <div className="project-stack-box">
                            <SiHtml5 className="stack-icon" size={'2em'}/>
                            <SiCss3 className="stack-icon" size={'2em'}/>
                            <SiReact className="stack-icon" size={'2em'}/>
                            <SiExpress className="stack-icon" size={'2em'}/>
                            <SiMongodb className="stack-icon" size={'2em'}/>
                        </div>
                    <div className='project-details-buttons'>
                        <button className="btn btn-outline-dark" onClick={() => props.updateProjectState('')}>Back</button>
                    </div>

                    
            </div>

        </div>
        </>
    )
}

export default Unravel