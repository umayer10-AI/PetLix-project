import { UserData } from '@/lib/data';
import React from 'react';
import Card from './Card';
import { Pet } from '@/lib/type';


const AllCards = async () => {

    const data = await UserData()

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5 max-w-[80%] mx-auto my-10'>
            {
                data.map((v:Pet) => <Card key={v._id} pet={v}></Card>)
            }
        </div>
    );
};

export default AllCards;