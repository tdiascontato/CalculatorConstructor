function Calculadora(){
    this.display = document.querySelector('.Display');
    this.executar=()=>{
        this.limpar();
        this.capturaCliques();
    }
    this.capturaCliques = () =>{
        document.addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains('btnComum')) this.adcNumero(el);
        if(el.classList.contains('btnClear')) this.limpar();
        if(el.classList.contains('btnDel')) this.deletar();
        if(el.classList.contains('btnIgual')) this.igual();
        });
    };
    this.igual= ()=>{
        try{
           const conta = eval(this.display.value); 
            this.display.value = conta;
        } catch{
            alert('Deu algo errado. Tente novamente!')
            this.executar();
        }
    }
    this.limpar=()=> {
        this.display.value = '';
        this.display.focus();
    };
    this.deletar=()=> this.display.value = this.display.value.slice(0,-1);
    this.adcNumero = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };
};
const exCalculadora = new Calculadora();
exCalculadora.executar();