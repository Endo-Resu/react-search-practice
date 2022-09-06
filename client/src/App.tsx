import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import Table from "./components/Table/Table";
import axios from "axios";

const App = () => {
    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            console.log(res)
            setData(res.data);
        };

        if (query.length === 0 || query.length > 2 ) {
            fetchUsers();
        }

    }, [query])

    return (
        <div className={s.app}>
            <input
                className={s.search}
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
            />
            {<Table data={data} />}
        </div>
    )
}

export default App;
