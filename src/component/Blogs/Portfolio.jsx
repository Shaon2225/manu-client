import React from 'react'

const Portfolio = () => {
  return (
    <div className='text-neutral mx-auto my-24 flex justify-center'>
        <div className='w-3/4'>
            <p><b>Name:</b> Md. Shahriar Nazim</p>
            <p><b>Email:</b> nazim1703073@stud.kuet.sc.bd</p>
            <p><b>Education:</b> Currently studing Electrical and Electronics Engineering at Khulna University of Engineering and Technology, Khulna</p>
            <p><b>Skills:</b> <ul class="list-disc ml-16">
                <li>HTML</li>
                <li>CSS
                    <ul className='list-disc ml-8'>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Sass</li>
                    </ul>
                </li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python(basic)</li>
                </ul></p>
            <p><b>Live site:</b> <ul class="list-disc ml-16">
                <li className='link link-accent'>https://soothingquran.netlify.app/</li>
                <li className='link link-accent'>https://photo-vision-1165e.web.app/</li>
                <li className='link link-accent'>https://shaon2225.github.io/react-Todo-app/</li>
                </ul></p>
        </div>
    </div>
  )
}

export default Portfolio