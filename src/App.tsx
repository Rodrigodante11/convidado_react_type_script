import React, {FC} from 'react';
import { Contatos } from './contatos';

const App: FC= () =>{

  return (
    <div >
      < Contatos />

    
    </div>
  );

}

export default App;

// const App: FC<AppProps> = ( {  nome, suaIdade } : AppProps) =>{

//   return (
//     <div className="App">
//       Ola {nome } sua idade {suaIdade}
//     </div>
//   );

// }

// interface AppProps {
//   nome: string;
//   suaIdade: number;

// }

// const App: FC<AppProps> = (props: AppProps) =>{

//     return (
//       <div className="App">
//         Ola {props.nome } sua idade {props.suaIdade}
//       </div>
//     );
  
// }
