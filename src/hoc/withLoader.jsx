import Preloader from "../components/Preloader/Preloader";
import {connect} from "react-redux";


export const withPreloader = (Component) => {

    const PreloaderComponent = (props) => {
        debugger
        if(props.loading) return <Preloader />
            else return <Component {...props} />
        
    }

    return connect((state) => ({...state.gallery}),null)(PreloaderComponent);
}