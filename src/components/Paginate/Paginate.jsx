import React, {useEffect, useState} from 'react';
import { Pagination } from 'antd';
import ListData from './ListData';
import './paginate.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import context from '../../context/context';


const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

function Paginate() {

    const data = useContext(context)
    const [listData, setListData] = useState([])
    const [showData, setShowData] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const query = useLocation()

    console.log(23, data);
    
    useEffect(function () {
        axios.get('https://www.nodemy.vn/api/bootcamp-1-s')
        .then(function(data){
            setListData(data.data)

            let arr = query.search.split('&').filter(function(value, index){
                return value.includes('page') || value.includes('pageSize')
            })
            let objectQuery = {}
        
            for (let i = 0; i < arr.length; i++){
                objectQuery[arr[i].split('=')[0]] = arr[i].split('=')[1]
            }

            const start = (objectQuery.page-1) * objectQuery.pageSize;
            const stop = objectQuery.page * objectQuery.pageSize
            setShowData(data.data.slice(start, stop))
            setPage(objectQuery.page * 1)
            setPageSize(objectQuery.pageSize * 1)
        })
        .catch(function(err){
            console.log(77, err);
        })
    }, [query.search])

    function changePage (page, pageSize){
        const start = (page-1) * pageSize;
        const stop = page * pageSize
        setShowData(listData.slice(start, stop))
        setPage(page)
        setPageSize(pageSize)
    }
    return (
        <div>
            <Pagination showSizeChanger current={page} onChange={changePage} 
            onShowSizeChange={onShowSizeChange}  total={listData.length} pageSize={pageSize}/>
            <ListData data={showData}/>
        </div>
    )
}

export default Paginate