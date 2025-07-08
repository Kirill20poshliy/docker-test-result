import { useEffect, useState, type FC } from 'react'
import postsService from './api/posts.service'
import type { IPost } from './shared/models/posts'
import { Main } from './Layouts/Main/Main'

export const App: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		postsService.getPosts().then(data => {
			if (data) {
				setPosts(data)
			}
		})
		.finally(() => {
			setIsLoading(false)
		})
	}, [])

    return isLoading ? (
			<>
				Loading...
			</>
		) : (
			<>
				<Main data={posts}/>
			</>
		)	
}

export default App
