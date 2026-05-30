import Navbar2 from '@/component/Navbar2';
import SideBar from '@/component/SideBar';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout = ({children}: LayoutProps) => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className='flex'>
                <SideBar></SideBar>
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default layout;