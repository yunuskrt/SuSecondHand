import React from 'react'
import styles from './exploreId.module.css'
import { Header, Label, LabelGroup, Button } from 'semantic-ui-react'
const ExploreId = () => {
	const imageUrl =
		'https://github.com/kunaal438/product-page/blob/master/img/bag.png?raw=true'
	return (
		<div className={styles.productPageContainer}>
			<div className={styles.productContainer}>
				<div className={styles.productImageWrapper}>
					<div
						className={styles.imageContainer}
						style={{ backgroundImage: `url(${imageUrl})` }}
					/>
				</div>
				<div className={styles.productContent}>
					<div>
						<Header size='huge' className={styles.title}>
							Acoustic Guitar
						</Header>
						<Label size='large' className={styles.category}>
							Music
						</Label>
					</div>
					<div className={styles.description}>
						freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin eget faucibus magna. Fusce bibendum convallis vestibulum.
						Phasellus pellentesque turpis ac justo eleifend porttitor. Integer
						mauris tortor, viverra sit amet purus nec, vehicula scelerisque
						nisi. Sed ante lorem, interdum sit amet lorem in, cursus efficitur
						ipsum. Nunc faucibus consequat mollis. Sed in pharetra nisi. Vivamus
						sit amet commodo turpis, accumsan venenatis sem. Nam iaculis massa
						in arcu luctus, ac blandit mi gravida. Sed porttitor eget purus eu
						lacinia. Vivamus viverra rhoncus porta. Ut posuere odio nec urna
						auctor auctor. Etiam pretium at est vitae finibus. Sed pharetra
						tempor justo. Cras interdum.
					</div>
					<div className={styles.productBottom}>
						<LabelGroup tag>
							<Label size='huge' className={styles.price}>
								$10.00
							</Label>
						</LabelGroup>
						<Button
							content='Buy Now'
							icon='right arrow'
							labelPosition='right'
							size='huge'
							onClick={() => {
								alert('You bought the product!')
							}}
							className={styles.buyNowBtn}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExploreId
