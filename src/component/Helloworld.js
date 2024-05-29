import './Helloworld.css';
import './Helloworld.scss';

class HelloWorld{
    buttonClass="Hello world";
    render(){
        const button=document.createElement('button');
        button.innerHTML=this.buttonClass;
        const body=document.querySelector('body');
        body.appendChild(button);
    }
}

export default HelloWorld;