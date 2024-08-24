import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
                <h1>
                    Welcome to HANA ESTATE!
                    Dreams meet Reality
                </h1>
                
                <p>
                    We provide the best services for you to find your dream home.
                    We have a variety of homes to choose from, and we are sure you will find the perfect one for you.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>   
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gains</h2>   
                    </div>
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>   
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