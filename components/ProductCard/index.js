import React from 'react'
import styles from './productCard.module.css'
import moment from 'moment'
import {
	CardMeta,
	CardHeader,
	CardDescription,
	CardContent,
	Card,
	Icon,
	Image,
} from 'semantic-ui-react'

const truncateDescription = (description, maxLength) => {
	if (description.length <= maxLength) {
		return description
	}
	return `${description.substring(0, maxLength)}...`
}

const ProductCard = ({
	imageUrl,
	name,
	publishedDate,
	brand,
	price,
	publisher,
	category,
	description,
}) => {
	return (
		<Card>
			<div
				className={styles.imageContainer}
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<CardContent>
				<CardHeader>
					<div className={styles.textContainer}>
						<span>{name}</span> | <span>{brand}</span>
					</div>
				</CardHeader>
				<CardMeta>
					{moment(publishedDate, 'DD.MM.YYYY').format('DD MMMM YYYY')}
				</CardMeta>
				<CardDescription>
					{truncateDescription(description, 25)}
				</CardDescription>
			</CardContent>
			<CardContent extra>
				<div className={styles.extraContent}>
					<div>
						<Icon name='user' />
						{publisher}
					</div>
					<div className={styles.price}>
						<Icon name='money' />
						<span>{price}</span> TL
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductCard
