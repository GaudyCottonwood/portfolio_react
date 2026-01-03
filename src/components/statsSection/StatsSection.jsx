import '../../index.css'

import CountUp from '../../assets/react-bits/countUp/CountUp'

const StatsSection = () => {
    return (
        <div className='bg-dark relative z-10 p-[30px]' id='stats'>
            <h1 className='font-outfit font-[900] text-[50px] text-light text-center mb-[30px]'>My Work</h1>
            <div>
                <p className='font-outfit font-[900] md:text-[40px] text-[20px] text-light'>Projects - <span><CountUp
                    startCounting
                    to={5}
                    from={0}
                    delay={0.3}
                    className="text-center text-[20px] font-outfit font-[900] text-light md:text-[40px]"
                /></span></p>
                <div className='flex flex-row flex-wrap justify-around w-[99%] justify-center gap-4'>
                    <div className='border border-light p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src="src/assets/imgs/raven.png" className='w-full h-[180px]' alt="raven-music.com image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Raven - Music Tracker</p>
                        <hr className='w-[100%] h-[1px] bg-light mb-1 border-none' />
                        <p className='text-light font-google-sans font-[500] text-[20px]'>React.JS, Node.js, Postgres</p>
                        <a className='text-dark hover:text-light font-google-sans font-[400] text-[20px] bg-light hover:transition-all hover:bg-dark hover:border-[1px] rounded-sm p-[3px] mt-auto self-end' href="https://www.raven-music.com" target="_blank">Visit Raven</a>
                    </div>
                    <div className='border border-light p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src="src/assets/imgs/cinemate.png" className='w-full h-[180px]' alt="cinemate.com image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Netflix Clone</p>
                        <hr className='w-[100%] h-[1px] bg-light mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>HTML, CSS, JS, Python</p>
                        <a className='text-dark hover:text-light font-google-sans font-[400] text-[20px] bg-light hover:transition-all hover:bg-dark hover:border-[1px] rounded-sm p-[3px] mt-auto self-end' href="https://gaudycottonwood.github.io/cinemate_hosting/" target="_blank">Visit Cinemate</a>
                    </div>
                    <div className='border border-light p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src="src/assets/imgs/portfolio_v1.png" className='w-full h-[180px] pt-2' alt="older portfolio image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Portfolio version 1</p>
                        <hr className='w-[100%] h-[1px] bg-light mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>HTML, CSS, JS, Bootstrap</p>
                        <a className='text-dark hover:text-light font-google-sans font-[400] text-[20px] bg-light hover:transition-all hover:bg-dark hover:border-[1px] rounded-sm p-[3px] mt-auto self-end' href="https://gaudycottonwood.github.io/portfolio-v1/" target="_blank">Visit Portfolio v1</a>
                    </div>
                    <div className='border border-light p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src="src/assets/imgs/emoji_game.png" className='w-full h-[180px] pt-2' alt="emoji game image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Emoji Game</p>
                        <hr className='w-[100%] h-[1px] bg-light mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px] pt-2'>React.JS</p>
                        <a className='text-dark hover:text-light font-google-sans font-[400] text-[20px] bg-light hover:transition-all hover:bg-dark hover:border-[1px] rounded-sm p-[3px] mt-auto self-end' href="https://gaudemojigame.ccbp.tech" target="_blank">Visit Emoji Game</a>
                    </div>
                    <div className='border border-light p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src="src/assets/imgs/restaurent_page.png" className='w-full h-[180px] pt-2' alt="restaurent page image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Restaurent Page</p>
                        <hr className='w-[100%] h-[1px] bg-light mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px] pt-2'>HTML, CSS, Bootstrap</p>
                        <a className='text-dark hover:text-light font-google-sans font-[400] text-[20px] bg-light hover:transition-all hover:bg-dark hover:border-[1px] rounded-sm p-[3px] mt-auto self-end' href="https://gaudsrestaurent.ccbp.tech/" target="_blank">Visit Restaurent Page</a>
                    </div>
                </div>
                <p className='font-outfit font-[900] md:text-[40px] text-[20px] text-light mt-[30px]'>Certifications - <span><CountUp
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