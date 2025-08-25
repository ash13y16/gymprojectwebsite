import './styles.css';

function HomePage() {
    return (
        <div className="HomePage">
            <div><h1>Hello, <i>Name</i></h1></div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1 style={{fontWeight: '100'}}>&lt;</h1>
                <div className={'card'}>
                    <i><h2>Sunday</h2></i>
                    <h3>Chest + Tri</h3>
                </div>
                <h1 style={{fontWeight: '100'}}>&gt;</h1>
            </div>
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
