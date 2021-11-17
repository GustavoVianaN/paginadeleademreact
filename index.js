import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
        <div className="style">
                <div className="main">
                    <div className="center">
                        <div clssname="menu">
                            <div className="logo">
                                <h3>Gustavo Viana</h3>
                            </div>
                            <div className="item-menu">
                                <a href="#">Eu quero receber aviso da lista de espera</a>
                            </div>
                        </div>
                       
                        <div className="form">
                           <h2>Entrar na lista de espera!</h2>
                          <form>

                            <div className="items-form">
                              <input type="text" />
                              <input type="text" />
                              <input type="entre em contato" />
                            </div>
                          </form>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="conteudo-single">
                      <h3>Chamada</h3>
                      <p>Entre em contato comigo e aprenda
                      todos os passos para se tornar um
                      programador
                      </p>
                    </div>
                    <div className="conteudo-single">
                      <h3>Chamada</h3>
                      <p>Entre em contato comigo e aprenda
                      todos os passos para se tornar um
                      programador
                      </p>
                    </div>
                      <div className="conteudo-single">
                      <h3>Chamada</h3>
                      <p>Entre em contato comigo e aprenda
                      todos os passos para se tornar um
                      programador
                      </p>
                    </div>
                    <div className="conteudo-single">
                      <h3>Chamada</h3>
                      <p>Entre em contato comigo e aprenda
                      todos os passos para se tornar um
                      programador
                      </p>
                    </div>
                <div/>

              </div>
              </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));