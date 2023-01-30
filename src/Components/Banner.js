import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
	return (
		<div className='relative'>
			<div className='absolute w-full h-20 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<Image
						loading='lazy'
						src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg'
						width={500}
						height={200}
						alt=''
					/>
				</div>
				<div>
					<Image
						loading='lazy'
						src='https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
						width={500}
						height={200}
						alt=''
					/>
				</div>
				<div>
					<Image
						loading='lazy'
						src='https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg'
						width={500}
						height={200}
						alt=''
					/>
				</div>
			</Carousel>
		</div>
	);
}

export default Banner;
