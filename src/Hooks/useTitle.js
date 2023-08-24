import { useEffect } from "react"

const useTitle = title => {

    useEffect (() => {
document.title= `  ${title}-Contact-management`

    },[title])
};

export default  useTitle ;