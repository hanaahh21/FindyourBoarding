import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1>
                    Find your nearest Boarding !
                    In just a few clicks...
                </h1>
                
                <p>
                    We provide the best services for you to find your nearest boarding.
                    We have a variety of boarding places to choose from, and we are sure you will find the perfect one for you.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>20+</h1>
                        <h2>Renters</h2>   
                    </div>
                    <div className="box">
                        <h1>2 km</h1>
                        <h2>Maximum Radius</h2>   
                    </div>
                    <div className="box">
                        <h1>50+</h1>
                        <h2>Students</h2>   
                    </div>
                </div>
            </div>
            
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  );
}

export default HomePage;