
import { useEffect, useState, useRef } from "react"
import { Table } from "react-bootstrap"
import style from "./Table.module.css"

function TableComponent() {
   
    
    //showing data in the table
    const [value, setValue] = useState([])

    //state for manipulate data
    const [filterdata, setFilterdata] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        const getUseData = async () => {
            const realData = await fetch("https://coralmango.com/api/react-test")
            const reqData = await realData.json();
            setValue(reqData)
            setFilterdata(reqData)
        }
        getUseData()

    }, [])
    //filteration on table
    const inputElement = useRef('')
    let filteredData = (e) => {
        const getSearch = e.target.value;
        if (getSearch.length > 0) {
            const searchData = value.filter(item => item.name.toLowerCase().includes(getSearch));
            setValue(searchData)
            inputElement.current = 'you are viewing filtered results!';
        } else {
            setValue(filterdata)
            inputElement.current = ''
        }
        setQuery(getSearch)
    }
    return (
        <div>
            <div className={style.main}>
                <h5>{inputElement.current}</h5>
                <input className={style.inp} type="text" placeholder="enter name" value={query} name="" id="" onChange={filteredData} />
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>sr.NO.</th>
                        <th>name</th>
                        <th>age</th>
                        <th>occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.occupation}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent