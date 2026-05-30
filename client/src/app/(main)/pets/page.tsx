import AllCards from '@/component/AllCards';
import React from 'react';

const page = async () => {

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10'>All Pets</h2>
            <AllCards></AllCards>
        </div>
    );
};

export default page;