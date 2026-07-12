interface GreetTwoProps
{
    message: string;
}
/*
const GreetTwo=({message}: GreetTwoProps): React.JSX.Element =><div>
    <h1>Greet two {message}</h1>
</div>
*/
const GreetTwo: React.FC<GreetTwoProps> = ({ message }:GreetTwoProps) => <div>Greet Two {message}</div>;
export default GreetTwo;