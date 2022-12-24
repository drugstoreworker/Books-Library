
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";

const HomePage = () => {
    return(
        <div className="container">
            <Search/>
            <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
            
        </div>
    )
}

export default HomePage;