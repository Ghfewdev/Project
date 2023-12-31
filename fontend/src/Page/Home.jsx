import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const columns = [
  { field: 'fm_id', headerName: 'รหัสตัวชี้วัด' },
  { field: 'fm_name', headerName: 'ชื่อตัวชี้วัด', width: 400 },
  { field: 'us_agency', headerName: 'ส่วนราชการ' },
  { field: 'de_qur', headerName: 'ไตรมาส' },
  { field: 'fd_date', headerName: 'วัน' },
  { field: 'fd_time', headerName: 'เวลา' },
  { field: 'de_ans', headerName: 'ประเมิน' },
  { field: 'de_result', headerName: 'สรุป' }
]

const Home = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/all")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <>
    <Navbar />
    <div className='container'>
      <div className='col-md-3'></div>
          <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
              columns={columns}
              rows={tableData}
              slots={{ toolbar: GridToolbar }}
              getRowId={(row) => Number(row.de_id)}
            />
          </div>
    </div>
    <Footer />
    </>
  );

}

export default Home;