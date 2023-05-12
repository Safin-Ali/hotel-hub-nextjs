const newArr = <ReturnType>(length: number, positive?: boolean, str?: boolean): ReturnType[] => {
    const baseArr = [...Array(length).keys()];
    let modifyArr: any = baseArr;

    if (positive) modifyArr = baseArr.map((key: number) => key + 1);

    if (str) modifyArr = modifyArr.map((key: number) => `${key}`);

    return modifyArr as ReturnType[];
};

export default newArr;
