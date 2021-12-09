import {TagsState} from "../store/ducks/actualTags/tagsState";
import {instance} from "../core/axios";

export const TagsAPI = {
    fetchTags(): Promise<TagsState['items']> {
        return instance.get('/themes').then(({data}) => data.data)
    }
}