import ServiceButton from './ServiceButton';
import googleImage from '../../assets/google.png';
import githubImage from '../../assets/github.png';
import './styles.css';

const SevicesLoginButtons = () => {
    return (
        <div className="sevices-login-container">
             <ServiceButton image={googleImage} title="Google"/>
             <ServiceButton image={githubImage} title="GitHub"/>
        </div>
    );
};

export default SevicesLoginButtons;