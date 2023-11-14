// import {useRef} from 'react';

// const ContadorRef = () => {
//     const contador = useRef(0);

//     const handleClick = (operacion) => {
//         if(operacion) {
//             contador.current++
//         } else {
//             contador.current--
//         }

//         console.log(`El contador va por: ${contador.current}`);
//     }

//     console.log(`El contador se renderizó`);


//     return (
//         <div>
//             <button onClick={ () => handleClick(true)}>Sumar</button>
//             <h3>{contador}</h3>
//             <button onClick={ () => handleClick(false)}>Restar</button>
//         </div>
//     );
// };

// export default ContadorRef;