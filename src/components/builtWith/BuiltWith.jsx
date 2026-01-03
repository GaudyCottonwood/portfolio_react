import '../../index.css'

import LogoLoop from '../../assets/react-bits/logoLoop/LogoLoop';
import { SiReact, SiVite, SiTailwindcss, SiVercel } from 'react-icons/si';

const techLogos = [
    { node: <SiReact className="text-[#61DAFB] text-[40px]" />, alt: "React" },
    { node: <SiVite className="text-white text-[40px]" />, alt: "Vite" },
    { node: <SiTailwindcss className="text-[#38B2AC] text-[40px]" />, alt: "Tailwind" },
    { node: <SiVercel className="text-[#3178C6] text-[40px]" />, alt: "Vercel" },
];

function BuiltWith() {
    return (
        <div>
            <div className='bg-dark relative z-10 p-[30px]' id='builtWith'>
                <h1 className='font-outfit font-[900] text-[50px] text-[#c5bcad]'>BUILT WITH</h1>
                <br />
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#0f0f0f' }}>
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        logoHeight={50}
                        gap={60}
                        hoverSpeed={0}
                        direction="left"
                    />
                </div>
                <h1 className='font-google-sans font-[900] text-[50px] text-[#c5bcad]'>Built by Hand, Built by Rohin Kotagiri.</h1>
            </div>
        </div>
    );
}

export default BuiltWith
