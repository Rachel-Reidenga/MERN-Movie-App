import react, { useEffect, useState } from 'react'
import {API_URL, API_KEY} from '../../components/views/Config'

// const [state, setstate] = useState(initalState)

function LandingPage() {

    useEffect(() => {
        fetch('${API_URL}SearchMovie/${API_KEY}/${title}') //Could be 'title' or 'search'?
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
    })

};

// return (
//     <div style={{ width: '100%', margin: 0}}>

//         <div style={{ background:
//             'linear-gradient(to bottom, rgba(0,0,0,0),
//             39%, rgba(0,0,0,0),
//             41%, rgba(0,0,0,0.65),
//             100%),
//             url('${props.image}'), #1c1c1c',
//                 height: '500px',
//                 backgroundSize: '100%, cover',
//                 backgroundPosition: 'center, center',
//                 width: '100%',
//                 position: 'relative'
//                 }}>
//         </div>
//         <div>
//             <div style={{ psition: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
//                 <title style={{ color: 'white' }} level={2}></title>
//                 <p style={{ color: 'white', fontSize: '1rem'}}text></p>
//             </div>
//         </div>
//     </div>
//     )




export default LandingPage