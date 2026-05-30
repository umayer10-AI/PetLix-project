import Navbar2 from '@/component/Navbar2';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const layout = ({children}: LayoutProps) => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;