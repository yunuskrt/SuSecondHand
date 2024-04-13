import React from 'react'
import styles from './content.module.css'

const Content = ({ children }) => {
	return (
		<div className={styles.contentWrapper}>
			<div className={styles.contentContainer}>{children}</div>
		</div>
	)
}

export default Content
