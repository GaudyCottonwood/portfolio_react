import '../../index.css'

import CircularGallery from '../../assets/react-bits/circularCarousel/CircularCarousel'

const SkillsSection = () => {
    return (
        <div className='h-[calc(100vh+60px)] md:h-screen bg-[#0f0f0f] relative z-10' id='skills'>
            <h1 className='font-outfit font-[900] text-[50px] text-[#c5bcad] md:block hidden text-center'>My Skills</h1>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={1} textColor="#c5bcad" borderRadius={0.05} />
            </div>
            <h1 className='font-outfit font-[900] text-[50px] text-[#c5bcad] md:hidden block text-center md:pb-[0px] mb-[500px]'>Skills</h1>
        </div>
    )
}

export default SkillsSection
