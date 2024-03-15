import './styles.css';

const ContentTitle = ({ title }) => {
    console.log("Content Title")
    return (
        <div className="content-title">
             {title}
        </div>
    );
};

export default ContentTitle;