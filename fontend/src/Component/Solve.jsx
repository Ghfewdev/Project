import Fetch from './Fetch'

const Solve = () => {
    var a = Fetch();
    var b = a.map(aa => [aa.fm_method, aa.fm_solve])
    console.log("Solve",b)
return(b)
}

export default Solve
