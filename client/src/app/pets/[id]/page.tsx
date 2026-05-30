import PetDetailsPage from '@/component/DetailsPage';
import { UserIdData } from '@/lib/data';
import React from 'react';

interface p {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({params}: p) => {

    const {id} = await params
    const data = await UserIdData(id)
    console.log(data)

    return (
        <div>
            <PetDetailsPage pet={data}></PetDetailsPage>
        </div>
    );
};

export default page;