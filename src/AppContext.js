import React,{createContext,useContext,useState} from 'react'
const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [videoData,setVideoData] = useState(null)
    const [formResponses,setFormResponses] = useState([])
    const setVideoAndForms = (video,forms) =>{
        setVideoData(video)
        setFormResponses(forms)
    }
    return (
        <AppContext.Provider value={{videoData,formResponses,setVideoAndForms}}>
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