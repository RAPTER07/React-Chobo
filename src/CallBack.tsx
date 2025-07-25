import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers: number[]) => {
    console.log("평균값 계산중");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
}

const CallBack = () => {
    /* useCallBack
    useCallBack은 useMemo와 상당히 비슷한 함수이다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용한다.
    이 hook을 사용하면 만들어놨던 함수를 재사용할 수 있다.
    
    useCallBack의 첫번째 파라미터에는 생성하고 싶은 함수를 넣고 두번째 파라미터에는 배열을 넣으면 된다.
    이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야 한다.
    
    onChange처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링될때 만들었던 함수를 계속해서 재사용하게 되며
    onInsert처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때
    새로 만들어진 함수를 사용하게 된다. */

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    }, [])

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number))
        setList(nextList);
        setNumber("");
    }, [])

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

export default CallBack;