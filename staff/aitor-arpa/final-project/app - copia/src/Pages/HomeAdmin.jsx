import CardJob from "../Components/Jobs/CardJob"
import CardJobList from "../Components/Jobs/CardJobList"
import AddJob from '../Components/Jobs/AddJob';



export default function HomeAdmin ( ) {
    return (<div>
     <h1>Home Admin</h1>
     <AddJob/>
     <CardJob/>
     <CardJobList/>
        
    </div>
   
      
    )
}
