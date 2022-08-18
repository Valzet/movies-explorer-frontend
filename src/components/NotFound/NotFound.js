import { useHistory } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
    let history = useHistory();
    function goBack() {
        history.goBack()
    }
    return (<section className='notFound'>
        <h3 className='notFound__title'>404</h3>
        <p className='notFound__subtitle'>Страница не найдена</p>
        <button onClick={goBack} className='notFound__button'>Назад</button>
    </section>)
}

export default NotFound;