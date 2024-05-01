import React, { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Header from '@components/layout/header'
import Content from '@components/layout/content'
import {
	Menu,
	MenuItem,
	SidebarPusher,
	SidebarPushable,
	Icon,
	Sidebar,
} from 'semantic-ui-react'
import styles from './layout.module.css'

const Layout = ({ app }) => {
	const router = useRouter()
	const isActiveItem = (href) => router.pathname.split('/')[1] == href

	return (
		<SidebarPushable>
			<Sidebar
				as={Menu}
				animation='overlay'
				icon='labeled'
				inverted
				vertical
				visible={true}
				width='wide'
				className={styles.sidebarContainer}
			>
				<div className={styles.sidebarTitle}>SuSecondHand</div>
				<MenuItem as='a' href='/' active={isActiveItem('')}>
					<Icon name='home' />
					Home
				</MenuItem>
				<MenuItem as='a' href='/explore' active={isActiveItem('explore')}>
					<Icon name='globe' />
					Explore
				</MenuItem>
				<MenuItem as='a' href='/account' active={isActiveItem('account')}>
					<Icon name='user' />
					Account
				</MenuItem>
				<MenuItem as='a' href='/order' active={isActiveItem('order')}>
					<Icon name='money bill alternate' />
					My Orders
				</MenuItem>
			</Sidebar>

			<SidebarPusher>
				<Content>{app}</Content>
			</SidebarPusher>
		</SidebarPushable>
	)
}

export default Layout
