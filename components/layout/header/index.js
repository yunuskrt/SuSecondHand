import React from 'react'
import styles from './header.module.css'

import { Menu, Button, Icon } from 'semantic-ui-react'

const Header = ({ toggleSidebar }) => {
	return (
		<Menu secondary className={styles.navbar}>
			<Button
				icon='bars'
				inverted
				color='white'
				size='huge'
				onClick={toggleSidebar}
			/>
			<div className={styles.rightNavbar}>
				<Icon name='handshake' size='big' />
				<div>SuSecondHand</div>
			</div>
		</Menu>
	)
}

export default Header
