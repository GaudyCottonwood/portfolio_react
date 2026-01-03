import '../../index.css'

const AboutSection = () => {
    return (
        <div className='h-screen bg-[#0f0f0f] p-[30px] relative z-10 flex md:flex-row flex-col md:justify-between justify-around md:items-center' id='about'>
            <h1 className='font-outfit font-[900] text-[50px] text-[#c5bcad] md:w-[40%] '>ABOUT ME</h1>
            <p className='font-google-sans font-[400] text-[20px] text-white md:w-[60%]'>I’m a Computer Science student with a strong interest in data analytics and web development. I enjoy building clean, user-friendly applications and turning data into meaningful insights. Always curious, always learning.</p>
        </div>
    )
}

export default AboutSection