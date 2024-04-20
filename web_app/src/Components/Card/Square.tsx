interface SquareBoxProps {
    title: string;
    value: string;
}

function SquareBox({ title, value }: SquareBoxProps) {
    return (
        <div className="flex justify-between flex-col border p-2 px-5 rounded-lg">
            <h1 className="font-bold text-lg">{title}</h1>
            <h1 className="font-bold text-lg">{value}</h1>
        </div>
    );
}

export default SquareBox;