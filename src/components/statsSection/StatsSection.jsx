import '../../index.css'

import CountUp from '../../assets/react-bits/countUp/CountUp'
import SpotlightCard from '../../assets/react-bits/spotlight/flashcard/SpotlightCard'
import ravenImg from '../../assets/imgs/raven.png'
import cinemateImg from '../../assets/imgs/cinemate.png'
import portfolioImg from '../../assets/imgs/portfolio_v1.png'
import emojiGameImg from '../../assets/imgs/emoji_game.png'
import restaurentImg from '../../assets/imgs/restaurent_page.png'

const StatsSection = () => {
    return (
        <div className='bg-dark relative z-10 p-[30px]' id='stats'>
            <h1 className='font-outfit font-[900] text-[50px] text-light text-center mb-[30px]'>MY WORK</h1>
            <div>
                <p className='font-outfit font-[900] md:text-[40px] text-[20px] text-light'>PROJECTS - <span><CountUp
                    startCounting
                    to={5}
                    from={0}
                    delay={0.3}
                    className="text-center text-[20px] font-outfit font-[900] text-light md:text-[40px]"
                /></span></p>
                <div className='flex flex-row flex-wrap justify-around w-[99%] justify-center gap-4'>
                    <div className='border border-neutral-800 bg-neutral-900 p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src={ravenImg} className='w-full h-[180px] rounded-[5px]' alt="raven-music.com image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Raven - Music Tracker</p>
                        <hr className='w-[100%] h-[1px] bg-neutral-800 mb-1 border-none' />
                        <p className='text-light font-google-sans font-[500] text-[20px]'>React.JS, Node.js, Postgres</p>
                        <a className='text-dark hover:text-light font-google-sans font-[800] text-[20px] bg-light hover:transition-all hover:bg-neutral-800 hover:border-[1px] rounded-sm p-[5px] mt-auto w-full' href="https://www.raven-music.com" target="_blank">Visit Raven</a>
                    </div>
                    <div className='border border-neutral-800 bg-neutral-900 p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src={cinemateImg} className='w-full h-[180px] rounded-[5px]' alt="cinemate.com image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Netflix Clone</p>
                        <hr className='w-[100%] h-[1px] bg-neutral-800 mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>HTML, CSS, JS, Python</p>
                        <a className='text-dark hover:text-light font-google-sans font-[800] text-[20px] bg-light hover:transition-all hover:bg-neutral-800 hover:border-[1px] rounded-sm p-[5px] mt-auto self-end' href="https://gaudycottonwood.github.io/cinemate_hosting/" target="_blank">Visit Cinemate</a>
                    </div>
                    <div className='border border-neutral-800 bg-neutral-900 p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src={portfolioImg} className='w-full h-[180px] rounded-[5px]' alt="older portfolio image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Portfolio version 1</p>
                        <hr className='w-[100%] h-[1px] bg-neutral-800 mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px]'>HTML, CSS, JS, Bootstrap</p>
                        <a className='text-dark hover:text-light font-google-sans font-[800] text-[20px] bg-light hover:transition-all hover:bg-neutral-800 hover:border-[1px] rounded-sm p-[5px] mt-auto self-end' href="https://gaudycottonwood.github.io/portfolio-v1/" target="_blank">Visit Portfolio v1</a>
                    </div>
                    <div className='border border-neutral-800 bg-neutral-900 p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src={emojiGameImg} className='w-full h-[180px] rounded-[5px]' alt="emoji game image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Emoji Game</p>
                        <hr className='w-[100%] h-[1px] bg-neutral-800 mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px] pt-2'>React.JS</p>
                        <a className='text-dark hover:text-light font-google-sans font-[800] text-[20px] bg-light hover:transition-all hover:bg-neutral-800 hover:border-[1px] rounded-sm p-[5px] mt-auto self-end' href="https://gaudemojigame.ccbp.tech" target="_blank">Emoji Game</a>
                    </div>
                    <div className='border border-neutral-800 bg-neutral-900 p-[15px] rounded-[10px] w-full md:w-[45%] lg:w-[18%] m-2 flex flex-col'>
                        <img src={restaurentImg} className='w-full h-[180px] rounded-[5px]' alt="restaurent page image" />
                        <p className='text-light font-outfit font-[900] text-[20px] pt-2'>Restaurent Page</p>
                        <hr className='w-[100%] h-[1px] bg-neutral-800 mb-1 border-none' />
                        <p className='text-light font-google-sans font-[400] text-[20px] pt-2'>HTML, CSS, Bootstrap</p>
                        <a className='text-dark hover:text-light font-google-sans font-[800] text-[20px] bg-light hover:transition-all hover:bg-neutral-800 hover:border-[1px] rounded-sm p-[5px] mt-auto self-end' href="https://gaudsrestaurent.ccbp.tech/" target="_blank">Restaurent Page</a>
                    </div>
                </div>
                <p className='font-outfit font-[900] md:text-[40px] text-[20px] text-light mt-[30px]'>CERTIFICATIONS - <span><CountUp
                    startCounting
                    to={8}
                    from={0}
                    delay={0.3}
                    className="text-center text-[20px] font-outfit font-[900] text-light md:text-[40px]"
                /></span></p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[10px] w-full'>
                    <SpotlightCard className="lg:col-span-2" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Database Management with SQL</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Oracle</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2024</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-2" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Python Essentials 1</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Cisco</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-2" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Python Essentials 2</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Cisco</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-2" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Networking Essentials</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Cisco</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-2" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Node.JS</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Nxtwave</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-2" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Front-End Engineering Job Simulation</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Forage</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-3" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Programming Foundations with Python</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Nxtwave</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                    <SpotlightCard className="lg:col-span-3" spotlightColor="rgba(215, 220, 221, 0.65)">
                        <div className='text-light'>
                            <h1 className="font-outfit font-[900] text-[20px]">Responsive Website</h1>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued by: Nxtwave</p>
                            <p className="font-google-sans font-[400] text-[20px] text-neutral-400">Issued on: 2025</p>
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </div>
    )
}

export default StatsSection