import React, {FC} from "react";

export interface IData {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
}

export interface TableProps {
    data: IData[]
}

const Table: FC<TableProps> = ({data}) => {

    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table