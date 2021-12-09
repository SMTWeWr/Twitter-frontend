import {instance} from "../core/axios";

type UploadImageReturn = {
    height: number,
    size: number,
    width: number,
    url: string
}

export const uploadImage = async (file: File): Promise<UploadImageReturn> => {
    const formData = new FormData()
    formData.append('image', file)

    const { data } = await instance.post('/upload', formData, {
        headers: {
            'Content_Type': 'multipart/form-data'
        }
    })
    return data
}