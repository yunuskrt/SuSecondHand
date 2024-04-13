import React, { useState } from 'react'
import styles from './explore.module.css'
import { Search, Label, Grid, GridColumn } from 'semantic-ui-react'
import ProductCard from '@/components/ProductCard'

const Explore = () => {
	const [searchValue, setSearchValue] = useState('')

	const handleSearchChange = (_, { value }) => {
		setSearchValue(value)
	}

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			console.log('Search value:', searchValue)
		}
	}

	const categories = [
		'Books',
		'Clothing',
		'Electronics',
		'Home Appliances',
		'Music',
		'Personal Care',
		'Sports',
		'Toys',
		'Vehicles',
		'Others',
	]

	const denemeProduct = {
		imageUrl:
			'https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/1249360970264321_1.jpg',
		name: 'Klasik Gitar',
		publishedDate: '03.04.2023',
		brand: 'Fender',
		price: 15550,
		publisher: 'Atila Sürücü',
		category: 'Music',
		description: 'Fender klasik gitar az kullanılmış',
	}

	const data = [
		{
			imageUrl:
				'https://img-zuhalmuzik.mncdn.com/mnresize/1000/1000/images/product/1249360970264321_1.jpg',
			name: 'Klasik Gitar',
			publishedDate: '03.04.2023',
			brand: 'Fender',
			price: 15550,
			publisher: 'Atila Sürücü',
			category: 'Music',
			description: 'Fender klasik gitar az kullanılmış',
		},
		{
			imageUrl:
				'https://www.toprakspotesya.com/wp-content/uploads/2023/07/altus_mini_buzdolabi_54561456.jpeg',
			name: 'Mini Buzdolabı',
			publishedDate: '12.03.2023',
			brand: 'Altus',
			price: 4900,
			publisher: 'Çınar Kılcı',
			category: 'Home Appliances',
			description: '2. el Altus marka mini buzdolabı',
		},
		{
			imageUrl:
				'https://www.beykozspot.com/assets/photo/tn/1545441987-32429.jpg',
			name: 'Su ısıtıcı',
			publishedDate: '02.02.2023',
			brand: 'Philips',
			price: 900,
			publisher: 'Yunus Kerestecioğlu',
			category: 'Home Appliances',
			description: 'Çok az kullanılmış sorunsuz su ısıtıcısı',
		},
		{
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNtRmOeXBrlT6hBGPWsL8k4IUxCLdbAgyBvdijQg3QA&s',
			name: 'Iphone 13 256 GB',
			publishedDate: '22.03.2023',
			brand: 'Apple',
			price: 44000,
			publisher: 'Deniz Demir',
			category: 'Electronics',
			description: 'Iphone 13 pembe renk 256GB',
		},
		{
			imageUrl:
				'https://media.wiley.com/product_data/coverImage300/6X/11190152/111901526X.jpg',
			name: 'Math 102 kitabı',
			publishedDate: '11.02.2023',
			brand: 'Wiley',
			price: 250,
			publisher: 'Berke Barışcan',
			category: 'Books',
			description: 'Math 102 dersinde kullanılan 2. el calculus kitabı',
		},
		{
			imageUrl:
				'https://images.gardrops.com/uploads/2933242/user_items/293324264-s1-1663549830511-6327c1866bfd9.jpeg',
			name: 'Zara kadın ceket',
			publishedDate: '27.03.2023',
			brand: 'Zara',
			price: 380,
			publisher: 'Çınar Kılcı',
			category: 'Clothing',
			description: 'Az giyilmiş Zara ceket small beden',
		},
		{
			imageUrl: 'https://i0.shbdn.com/photos/52/01/71/x5_1134520171gko.jpg',
			name: 'kadın kol çantası',
			publishedDate: '29.01.2023',
			brand: 'Zara',
			price: 875,
			publisher: 'Deniz Demir',
			category: 'Clothing',
			description: 'Zara kadın çanta',
		},
		{
			imageUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPZd784dSWTbwdC011_A722ewqH6-6ZiJky_pwmfpBQ&s',
			name: 'Erkek Parfüm',
			publishedDate: '23.02.2023',
			brand: 'Chanel',
			price: 1000,
			publisher: 'Çınar Kılcı',
			category: 'Personal Care',
			description: 'Bleu De Chanel yarısı dolu 100ml erkek parfüm',
		},
		{
			imageUrl: 'https://i0.shbdn.com/photos/52/01/71/x5_1134520171gko.jpg',
			name: 'Airpods 2.nesil',
			publishedDate: '04.04.2023',
			brand: 'Apple',
			price: 3500,
			publisher: 'Berke Barışcan',
			category: 'Electronics',
			description: 'Ambalajlı hiç kullanılmamış airpods 2. nesil',
		},
	]

	return (
		<div className={styles.exploreContainer}>
			<div className={styles.title}>Explore</div>
			<Search
				placeholder='Press enter for search...'
				onSearchChange={handleSearchChange}
				open={false}
				input={{ style: { width: '100%' } }}
				onKeyPress={handleKeyPress}
			/>
			<div className={styles.categoryContainer}>
				{categories.map((category) => (
					<Label key={category} className={styles.categoryLabel}>
						{category}
					</Label>
				))}
			</div>
			<Grid>
				{data.map((product, index) => {
					return (
						<GridColumn mobile={16} tablet={8} computer={4} key={index}>
							<ProductCard {...product} />
						</GridColumn>
					)
				})}
			</Grid>
		</div>
	)
}

export default Explore
