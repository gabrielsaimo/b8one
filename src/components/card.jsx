import React , {useState} from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './laylout/group.css'
function Card(props) {

const [state, setState] = useState(false);
const TogglwSwicht = () =>{
    state ? setState(false) : setState(true);
    console.log(state);
}
const [state1, setState1] = useState(false);
const TogglwSwicht1 = () =>{
    state1 ? setState1(false) : setState1(true);
    console.log(state1);
}
    return (

        <div className='group'>
            <div>

            </div>
            {props?.set.map(
                (Descricao, index) => {
                    return (<React.Fragment key={index}>
                        <div className='card'>
                            <div className="cards">
                            <a className={state ? 'circle2':'circle'} onClick={TogglwSwicht}>
                                    <FontAwesomeIcon className="fa"  icon={farHeart} color="black" size="1x" />
                                </a>
                                <img className="img" src={Descricao.img} />
                                
                                <h6 className='descr'>

                                    {Descricao.nome}
                                </h6>
                                <h6>
                                    <del className='desc'>
                                        R$ {Descricao.oferta}
                                    </del>
                                </h6>

                                <h6 className='preco'>
                                    R$ {Descricao.preco}
                                </h6>
                                <h6 className='parc'>
                                    em até <strong className='strong'>10x de R$ {Descricao.preco}</strong>  sem juros
                                </h6>
                                <button className={state1 ? 'btn1':'btn'} type="submit" onClick={TogglwSwicht1}>{state1 ? '✓ Adicionado':'Adicionar'}</button>
                            </div>

                        </div>
                    </React.Fragment>)
                }
            )}

        </div>


    )
    
}

export default Card