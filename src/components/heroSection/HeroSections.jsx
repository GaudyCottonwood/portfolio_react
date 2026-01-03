import '../../index.css'

import HeroImg from '../../assets/unnamed.jpg'
import StaggeredMenu from '../../assets/react-bits/menu-comp/MenuBit';

const HeroSection = () => {
    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
        { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
        { label: 'Skills', ariaLabel: 'View my skills', link: '#skills' },
        { label: 'Work', ariaLabel: 'View my work', link: '#stats' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
    ];

    const socialItems = [
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];
    return (
        <div className="relative" id="home">
            <StaggeredMenu
                items={menuItems}
                accentColor="#5F5544"
                menuButtonColor="#0f0f0f"
                className="h-screen overflow-hidden"
                isFixed={false}
            />
            <div
                className="bg-cover bg-center h-screen md:p-[80px] p-[20px] flex flex-col justify-between"
                style={{ backgroundImage: `url(${HeroImg})` }}
            >
                <p className='font-outfit font-[900] text-3xl text-white p-[10px]'>PORTFOLIO</p>
                <div>
                    <h1 className='font-outfit font-[900] lg:text-[200px] md:text-[150px] text-[70px] text-white p-[-10px] fixed bottom-[20px] left-[20px] md:bottom-[80px] md:left-[80px] z-0'>ROHIN<br />KOTAGIRI</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection