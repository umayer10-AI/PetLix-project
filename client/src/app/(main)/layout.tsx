import Navbar from '@/component/Navbar';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout = ({children}: LayoutProps) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;