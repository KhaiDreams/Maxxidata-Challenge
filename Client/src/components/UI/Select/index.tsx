import * as S from "./styles";

interface IProps {
    name: string;
    onChange: (event?: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {
        label: string;
        value: string;
    }[];
}

export function Select({ name, onChange, options }: IProps) {
    return (
        <S.Select
            name={name}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.label}
                </option>
            ))}
        </S.Select>
    );
}