import React, { useState } from 'react'
import Footer from '../Component/Footer';
import Authlevel from '../Component/Authlevel';

const AddForm = () => {

Authlevel();

    const [numpara, setNumpara] = useState(0);
    const [parass, setParass] = useState("");
    const [solv, setSolv] = useState("");

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const JsonData = {
            id: data.get("id"),
            name: data.get("name"),
            solve: data.get("solve"),
            method: data.get("method"),
            numpara: data.get("numpara"),
            def: data.get("define"),
            paras: g(numpara)
        };

        fetch("http://localhost:3000/form/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(JsonData)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status === "ok") {
                    alert("add form sucess");
                } else {
                    alert("add form failed")
                }
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    var par = (val) => {
        let ht = '';
        let pas = '';
        for (let i = 1; i <= val; i++) {
            pas = `para${i}`
            ht += `<label>ค่าการประเมินที่ ${i}&nbsp;&nbsp;</label><br /> <input type="text" name=${pas} id=${i} /><br /><br />`;
        }
        return ht
    }

    function g(ve) {
        var o = "";
        try {
            for (var i = 1; i <= ve; i++) {
                o += document.getElementById(`${i}`).value;
                if (i != ve) {
                    o += ", "
                }
            }
            // console.log(o)
            // document.getElementById("sum").value = o
            return o

        } catch {

        }

    }

    const dis = () => {
        if (document.getElementById("submit").disabled === true) {
            g(numpara)
            document.getElementById("submit").disabled = false
        }
        else {
            document.getElementById("submit").disabled = true

        }
    }

    return (
        <>

            <div className='bgi'>
                <br /><br />
                <div className="card">
                    <div className="container">
                        <br />
                        <h1 className='textc'>
                            เพิ่มตัวชี้วัด
                        </h1>
                        <br /><br />
                        <form onSubmit={handleSubmit} className='textl2'>

                            <label>ชื่อตัวชี้วัด:&nbsp;&nbsp; </label><br /><textarea type="text" name="name" autoFocus />
                            <br /><br />
                            <label>นิยามของตัวชี้วัด:&nbsp;&nbsp; </label><br /><textarea type="text" name="define" autoFocus />
                            <br /><br />
                            <label>ลำดับตัวชี้วัด:&nbsp;&nbsp; </label><br /><input type="number" name="id" />
                            <br /><br />
                            <label>ค่าเป้าหมาย:&nbsp;&nbsp; </label><br /><input type="text" name="solve" />
                            <br /><br />
                            <label>สรุปด้วย: &nbsp;&nbsp;</label>
                            <select name='method' value={solv} onChange={e => setSolv(e.target.value)} >
                                <option>ค่าเฉลี่ย</option>
                                <option>ผลรวม</option>
                                
                            </select>
                            <br /><br />
                            <label>จำนวนค่าที่ใช้ประเมิน:&nbsp;&nbsp; </label><br /><input type="number" name="numpara" value={numpara}
                                onChange={e => setNumpara(e.target.value)} />
                            <br /><br />

                            <div dangerouslySetInnerHTML={{ __html: par(numpara) }}>
                            </div>

                            <label>ยืนยัน: <input type="checkbox" value={parass}
                                onClick={e => { setParass(e.target.value), dis() }} /> </label>
                            <br /><br />
                            {/* <label>ค่าการประเมินทั้งหมด <br /><input type='text' name='paras' id='sum' disabled /></label>
                            <br /> */}

                            <br />
                            <button id='submit' type='submit' className='btn btn-success' disabled> เพิ่มตัวชี้วัด </button>
                        </form>
                        <br />
                        <div className='textc'><p className='inline textl'><a href="/">กลับหน้าหลัก</a></p>
                            <p className='inline textr'><a href="/"></a></p>
                        </div>
                    </div>
                </div>
                <div><br /><br /><br /><br /></div>
                <Footer />
            </div>

        </>
    )
}

export default AddForm
