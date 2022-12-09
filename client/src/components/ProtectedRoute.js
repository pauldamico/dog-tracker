import {Navigate} from 'react-router-dom'

export default function ProtectedRoute (props){
const {token, children, loc} = props

return(<div>
    {token ? children : <Navigate to={loc}/> }
</div>)


}