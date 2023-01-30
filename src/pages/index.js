import Head from 'next/head';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProductFeed from '../Components/ProductFeed';

export default function Home({ products }) {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Amazon Clone -by VeeJaker</title>
				<meta
					name='description'
					content='GAmazon clone using nextJs, firebase, tailwindCSS.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />

			<main className='max-w-screen-2xl mx-auto'>
				{/* Banner */}
				<Banner />

				{/* ProductFeed */}
				<ProductFeed products={products} />
			</main>
			{/* Footer */}
			<Footer />
		</div>
	);
}

export async function getServerSideProps(context) {
	const products = await fetch('https://fakestoreapi.com/products').then(
		(res) => res.json()
	);
	// .then((json) => console.log(json));

	return {
		props: {
			products,
		},
	};
}
