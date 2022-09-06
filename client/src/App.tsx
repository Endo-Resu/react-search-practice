import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import Table, {IData} from "./components/Table/Table";
import axios from "axios";

const App = () => {
    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get<IData[]>(`http://localhost:5000?q=${query}`);
                setData(res.data);
            } catch (e) {
                console.error(e)
            }
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
