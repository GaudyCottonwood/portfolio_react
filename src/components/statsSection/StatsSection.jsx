import '../../index.css'

import CountUp from '../../assets/react-bits/countUp/CountUp'

const StatsSection = () => {
    return (
        <div className='bg-dark relative z-10 p-[30px]' id='stats'>
            <h1 className='font-outfit font-[900] text-[50px] text-light text-center mb-[30px]'>Statistics</h1>
            <div>
                <p className='font-outfit font-[900] md:text-[40px] text-[20px] text-light'>Projects - <span><CountUp
                    startCounting
                    to={5}
                    from={0}
                    delay={0.3}
                    className="text-center text-[20px] font-outfit font-[900] text-light md:text-[40px]"
                /></span></p>
                <div className='flex flex-row flex-wrap justify-around w-[99%] justify-center gap-4'>
                    <div className='border border-light p-[20px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2'>
                        <img src="src/assets/imgs/raven.png" className='w-full h-[180px]' alt="raven-music.com image" />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>Raven - Music Tracker</p>
                        <p className='text-light font-google-sans font-[400] text-[20px]'>React, Node.js, Postgres</p>
                        <a className='text-light font-google-sans font-[400] text-[20px]' href="https://www.raven-music.com" target="_blank">Visit Raven</a>
                    </div>
                    <div className='border border-light p-[20px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2'>
                        <img src="src/assets/imgs/cinemate.png" className='w-full h-[180px]' alt="raven-music.com image" />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>Cinemate - Netflix Clone</p>
                        <p className='text-light font-google-sans font-[400] text-[20px]'>HTML, CSS, JS, Bootstrap, Python</p>
                        <a className='text-light font-google-sans font-[400] text-[20px]' href="https://gaudycottonwood.github.io/cinemate_hosting/" target="_blank">Visit Cinemate</a>
                    </div>
                    <div className='border border-light p-[20px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2'>
                        <img src="src/assets/imgs/raven.png" className='w-full h-[180px]' alt="raven-music.com image" />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>Portfolio version 1</p>
                        <p className='text-light font-google-sans font-[400] text-[20px]'>HTML, CSS, JS, Bootstrap</p>
                        <a className='text-light font-google-sans font-[400] text-[20px]' href="https://gaudycottonwood.github.io/portfolio-v1/" target="_blank">Visit Portfolio v1</a>
                    </div>
                    <div className='border border-light p-[20px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2'>
                        <img src="src/assets/imgs/raven.png" className='w-full h-[180px]' alt="raven-music.com image" />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>Raven - Music Tracker</p>
                        <p className='text-light font-google-sans font-[400] text-[20px]'>React, Node.js, Postgres</p>
                        <a className='text-light font-google-sans font-[400] text-[20px]' href="https://www.raven-music.com" target="_blank">Visit Raven</a>
                    </div>
                    <div className='border border-light p-[20px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2'>
                        <img src="src/assets/imgs/raven.png" className='w-full h-[180px]' alt="raven-music.com image" />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>Raven - Music Tracker</p>
                        <p className='text-light font-google-sans font-[400] text-[20px]'>React, Node.js, Postgres</p>
                        <a className='text-light font-google-sans font-[400] text-[20px]' href="https://www.raven-music.com" target="_blank">Visit Raven</a>
                    </div>
                </div>
                <p className='font-outfit font-[900] md:text-[40px] text-[20px] text-light'>Certifications - <span><CountUp
                    startCounting
                    to={8}
                    from={0}
                    delay={0.3}
                    className="text-center text-[20px] font-outfit font-[900] text-light md:text-[40px]"
                /></span></p>
            </div>
        </div>
    )
}

export default StatsSection