import { ru } from 'date-fns/locale'
import {formatDistance} from "date-fns";

export const formatDate = (date: Date): string => {
    return  formatDistance(
        date,
        new Date(),
        {locale: ru})
}


