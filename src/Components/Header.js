/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Logo from '../Image/amazon.svg';
import {
	Bars4Icon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
	const { data: session } = useSession();

	return (
		<header>
			{/* Top nav */}
			<div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
				<div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
					<Image
						src={Logo}
						alt=''
						width={150}
						height={40}
						className='cursor-pointer'
					/>
				</div>
				{/* Search */}
				<div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
					<input
						className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none '
						type='text'
						name='search'
						id='search'
					/>
					<MagnifyingGlassIcon className='h-12 p-4' />
				</div>
				{/* Right */}
				<div className='text-white flex items-center text_xs space-x-6 mx-6 whitespace-nowrap'>
					<div
						onClick={!session ? signIn : signOut}
						className='cursor-pointer link'
					>
						<p className='hover:underline'>
							{session ? `Hello, ${session.user.name}` : 'Sign In'}
						</p>
						<p className='font-extrabold md:text-sm'>Account & Lists</p>
					</div>

					<div className='cursor-pointer link'>
						<p>Returns</p>
						<p className='font-extrabold md:text-sm'>& Orders</p>
					</div>

					<div className='relative link flex items-center'>
						<span className='absolute top-0 right-0 md:right-10 h-5 w-5 bg-yellow-400 text-sm text-center rounded-full text-black font-bold'>
							4
						</span>
						<ShoppingCartIcon className='h-10' />
						<p className='hidden md:inline font-extrabold md:text-sm mt-2'>
							Basket
						</p>
					</div>
				</div>
			</div>
			{/* Bottom nav */}
			<div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-sm text-white'>
				<p className='link flex items-center'>
					<Bars4Icon className='h-6 mr-1' />
					All
				</p>
				<p className='link'>Today's Deals</p>
				<p className='link'>Customer Service</p>
				<p className='link'>Gift Cards</p>
				<p className='link'>Registry</p>
				<p className='link'>Sell</p>
			</div>
		</header>
	);
}

export default Header;
