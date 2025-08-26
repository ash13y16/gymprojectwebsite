import Slideshow from "./Slideshow";
import './styles.css';

function HomePage() {
    return (
        <div className="HomePage">
            <div><h1>Hello, <i>Name</i></h1></div>
            <Slideshow />
            <div className={'menu'}>
                <h2>Menu</h2>
                <h3>Item 1</h3>
                <h3>Item 2</h3>
                <h3>Item 3</h3>
            </div>
        </div>
    );
}

export default HomePage;
