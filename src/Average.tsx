import { useState, useMemo } from "react";

const getAverage = (numbers: number[]) => {
    console.log("평균값 계산중");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    }
    const onInsert = () => {
        /* Array 인스턴스의 concat() 메서드는 두 개 이상의 배열을 병합하는 데 사용된다.
        이 메서드는 기존 배열을 변경하지 않고 새 배열을 반환한다.
        parseInt: pasreInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환한다. */
        const nextList = list.concat(parseInt(number))
        setList(nextList);
        setNumber(""); //number 상태값 초기화
    }
    /* useMemo hook은 작업을 최적화할 수 있다.
    렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 원하는 값이 바뀌지 않는다면
    이전에 연산했던 결과를 다시 사용하는 방식이다. */
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>평균값: {avg}</div>
        </div>
    )
}

export default Average;