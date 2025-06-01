import React from 'react'

const About = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between py-30 md:py-10 px-4 md:px-0'>
        {/* Left Col */}
        <div className='w-full md:w-1/2 md:px-6 lg:px-20'>
            <h2 className='text-sm font-bold'>Tagline</h2>
            <h1 className='py-3 text-4xl'>Tell the story of how your company came about</h1>
        </div>

        {/* Left Col */}
        <div className='w-full md:w-1/2 md:pr-15'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta odio accusantium ducimus ea hic 
                maiores, voluptates dolor facilis voluptas excepturi earum ut, tempore eum adipisci, dolores odit 
                ad fugit magnam deserunt nesciunt cum temporibus delectus asperiores! Aut necessitatibus fuga 
                similique ad enim atque ex autem? Perspiciatis, distinctio dolor. Expedita aliquam libero deleniti 
                iste? Molestiae enim rerum, repudiandae ducimus, excepturi ipsa laboriosam animi 
                facere eos recusandae debitis, quis architecto nesciunt blanditiis laudantium asperiores quaerat. 
                Adipisci, hic itaque totam soluta nihil repudiandae optio necessitatibus iusto. Mollitia, optio hic, 
                quia non ratione et est ullam id nemo perspiciatis quas ex voluptatum, veritatis tempore.</p>
        </div>
    </section>
  )
}

export default About