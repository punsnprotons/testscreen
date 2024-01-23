import React,{createContext,useContext,useState} from 'react'
const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [videoData,setVideoData] = useState(null)
    const [formData, setFormData] = useState([]);

    const [formResponses,setFormResponses] = useState([])
    

    const setContextData = (data) =>{
        if (data.videoData) setVideoData(data.videoData)
        if (data.formData) setFormData(data.formData)
    }
    return (
        <AppContext.Provider value={{videoData,formResponses,setContextData}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () =>{
    const context = useContext(AppContext)
    if(!context){
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context 
}