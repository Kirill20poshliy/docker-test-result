import { AxiosError } from "axios"
import { api } from "./api"
import type { IPost } from "../shared/models/posts"

class PostsService {

    async getPosts() {
        const result = await api.get<IPost[]>('/')
            .then(data => {
                if (data.data) {
                    return data.data
                }
            })
            .catch(err => {
                if (err instanceof AxiosError) {
                    console.log(err.message)
                }
            })
            
        return result
    }
}

export default new PostsService()