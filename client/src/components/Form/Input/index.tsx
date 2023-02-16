export {}
import Inputt, { Label } from './Input'
interface InputProps {
label:string;
name:string;
value:string;
type:string;
onChange: (event: React.ChangeEvent <HTMLInputElement>)=>void
}
const Input:React.FC <InputProps> =({ type,label, name, value, onChange})=> 
{
return(
<div>
    <Label>{label}:</Label>
    <Inputt type={type} id={name} name={name} value={value} onChange={onChange}/>
</div>
)
}
export default Input
/* name:string;
image:string;
description:string;
price:number;*/