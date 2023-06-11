import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import { useQuery } from 'react-query';

const FAQ = () => {
    const { isLoading, error, data } = useQuery('faqs', () =>
    fetch('http://localhost:5000/faqs').then(res =>
      res.json()
    )
  );



    return (
        <div className='max-w-[1280px] mx-auto h-auto py-20 flex items-center gap-10'>
            <div className="sectionHeading text-left text-accent w-1/2">
                <div className="subHeading relative mb-5">
                <p className='font-semibold tracking-widest'>Interrogates</p>
                <div className='absolute w-14 h-[2px] bg-primary top-8'></div>
                </div>
                <p className='text-5xl text-secondary font-bold'>Frequently Asked
                Questions</p>
                <PrimaryButton>See All</PrimaryButton>
            </div>
            <div className="questionsSection w-1/2">
                <div className="faqs w-full mx-auto h-full p-5 border rounded-sm">

                    {data?.map(faq => <div className="collapse collapse-arrow border-b border-base-300 bg-base-100 rounded-sm"
                                        key={faq._id}>
                                        <input type="checkbox" /> 
                                        <div className="collapse-title text-xl font-medium text-neutral">
                                            {faq.question}
                                        </div>
                                        <div className="collapse-content h-28 text-secondary"> 
                                        <p>{faq.answer}</p>
                                        </div>
                                    </div>
)}


                </div>
            </div>
        </div>
    );
};

export default FAQ;