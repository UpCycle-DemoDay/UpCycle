const tolevel2 = document.getElementById('toLvl2');


const content = document.querySelector('main');


tolevel2.addEventListener('click', function(){
    const contentLvl2 = `   <h1>Solicitação de retirada de resíduos</h1>
    <div class="container">
        <div class="cell cell-active">1</div>
        <div class="line line1"></div>
        <div class="cell" id="lvl2">2</div>
        <div class="line line2"></div>
        <div class="cell" id="lvl3">3</div>
    </div>
    <div class="peso">
        <h4>Escolha uma das opções para que tenhamos uma base de peso dos seus resíduos.</h4>
        <h5>Os dados serve para que possamos escolher o veículo mais adequado para retirar os materiais.</h5>
        <label for="">Peso estimado</label>
        <div class="select">
            <select>
                <option>Opções</option>
                <option>Mais leve que um saco de arroz de 5kg</option>
                <option>Mais leve que um fogão</option>
                <option>Mais leve que uma geladeira</option>
                <option>Mais pesado que uma geladeira</option>
            </select>
            <div class="select_arrow">
            </div>
        </div>
        <button type="button" id="toLvl3">Próximo</button>
    </div>
   
    `;
    content.innerHTML = contentLvl2;
    const line1 = document.querySelector('.line1');
    const lvl2 = document.getElementById('lvl2');
    line1.classList.add('line-active');
    line1.classList.remove('line');
    lvl2.classList.add('cell-active');
    lvl2.classList.remove('cell');

    const tolevel3 = document.getElementById('toLvl3');
    
    tolevel3.addEventListener('click', function(){
        const contentLvl3 = `<h1>Solicitação de retirada de resíduos</h1>
        <div class="container">
            <div class="cell cell-active">1</div>
            <div class="line line1"></div>
            <div class="cell" id="lvl2">2</div>
            <div class="line line2"></div>
            <div class="cell" id="lvl3">3</div>
        </div>
        <div class="adress">
            <div>
                <label for="">CEP</label>
                <input type="text" placeholder="08466-003" autofocus>
                <label for="">Bairro</label>
                <input type="text" placeholder="Vila Roseira II">
                <label for="">Endereço completo</label>
                <input type="text" placeholder="Rua recanto dos cravos, 244">
            </div>
            <div>
                <label for="">Cidade</label>
                <input type="text" placeholder="São Paulo">
                <label for="">Complemento</label>
                <input type="text" placeholder="apto 22, torre 3">
            </div>
        </div>
        <button type="button" id="confirm">Finalizar</button>`;
        content.innerHTML = contentLvl3;
        const line1 = document.querySelector('.line1');
        const lvl2 = document.getElementById('lvl2');
        line1.classList.add('line-active');
        line1.classList.remove('line');
        lvl2.classList.add('cell-active');
        
        const line2 = document.querySelector('.line2');
        const lvl3 = document.getElementById('lvl3');
        line2.classList.add('line-active');
        line2.classList.remove('line');
        lvl3.classList.add('cell-active');
        lvl3.classList.remove('cell');

        const confirm = document.getElementById('confirm');
        confirm.addEventListener('click', function(){
            const loading = `<div class="loading"></div>`;
            content.innerHTML = loading;
            setTimeout(function() {
                const confirmation = `<img src="img/confirm.png" alt="" id="imgConfirm">
                <h2>Agendamento realizado!</h2>
                <p>Agora basta você esperar e acompanhar o andamento do seu descarte.</p>
                <button type="button" id="acompanhar">Acompanhar coleta</button>`;
                content.innerHTML = confirmation;
                const acompanhar = document.getElementById('acompanhar');
                acompanhar.addEventListener('click', function(){
                const acompanhamento = `<img src="img/acompanhamento.png" alt="" id="imgAcompanhamento">
                <div class="acompanhamentoDescricao">
                    <div class="lines-descricao">
                        <div class="black">
                            <div class="black-line"></div>
                            <p>Caminho atual</p>
                        </div>
                        <div class="blue">
                            <div class="blue-line"></div>
                            <p>Caminho a ser percorrido</p>
                        </div>
                    </div>
                    <div class="corDescricao">
                        <h1>A coleta está indo até você</h1>
                        <p>Atualizado</p>
                        <p>Atualizado há 5 minutos</p>
                        <p>Atualizado há 10 minutos</p>
                    </div>
                </div>
                <button type="button" id="close">Fechar</button>`;
                content.innerHTML = acompanhamento;
                const close = document.getElementById('close');
                close.addEventListener('click', function(){
                    window.location.href = 'perfilUser.html';
                });
            })
            }, 1000);
            
        });
    });
    
});

    

