import { Header, Profile, ReturnBttn } from "../../../components/Header/styles";
import { useNavigate } from "react-router-dom";

export default function RegisterHeader ({secondPage, setSecondPage,title}) {
    const navigate = useNavigate();
    const handleClick = ()=> {
        if(!secondPage){
            navigate(-1)
        }
        setSecondPage(false)
    }
    return(
        <Header>
            <ReturnBttn onClick={handleClick}/>
            <h2>{title}</h2>
            <Profile onClick={()=>navigate('/profile')}/>
        </Header>
    )
}