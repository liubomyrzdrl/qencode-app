import { Link } from "react-router-dom";
import './styles.css';

const LinkComponent = ({ pathTo, text}) => {
    return <Link  to={pathTo}><span className="link-component">{text}</span></Link>
};

export default LinkComponent;