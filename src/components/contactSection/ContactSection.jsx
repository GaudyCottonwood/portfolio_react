import '../../index.css'

import Shuffle from '../../assets/react-bits/shuffleText/ShuffleText';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';

const ContactSection = () => {
    return (
        <div className='bg-light relative z-10 p-[30px] h-screen flex md:flex-row flex-col justify-around items-center' id='contact'>
            <Shuffle
                className='font-outfit font-bold text-[40px]'
                text="Let's Connect"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="power3.out"
                stagger={0.03}
                threshold={0.3}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
            />
            <div className='flex flex-col gap-10 justify-center h-full'>
                <div className='flex flex-row items-center gap-4 text-dark hover:text-neutral-600 transition-colors cursor-pointer'>
                    <SiGmail className='text-[30px]' />
                    <p className='font-google-sans text-[25px]'>rohin.kotagiri@gmail.com</p>
                </div>
                <a href="https://www.linkedin.com/in/rohin-kotagiri/" target="_blank" className='flex flex-row items-center gap-4 text-dark hover:text-neutral-600 transition-colors decoration-none'>
                    <SiLinkedin className='text-[30px]' />
                    <p className='font-google-sans text-[25px]'>My LinkedIn</p>
                </a>
                <a href="https://github.com/GaudyCottonwood" target="_blank" className='flex flex-row items-center gap-4 text-dark hover:text-neutral-600 transition-colors decoration-none'>
                    <SiGithub className='text-[30px]' />
                    <p className='font-google-sans text-[25px]'>My GitHub</p>
                </a>
            </div>
        </div>
    )
}

export default ContactSection
