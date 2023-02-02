import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>Priduct</h2>
            <ul>
                <li>
                    <Link to='/product/1'>1번 상품</Link> 
                </li>
                <li>
                    <Link to='/product/2'>2번 상품</Link> 
                </li>
            </ul>
        </div>
    );
};

export default Main;