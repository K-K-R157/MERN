const DynamicComponent=()=>{
    const marks=[35,54,46,23,78];

    const studentName='sayam';

    const averageMark=()=>{
        let sum=0;
        for(let i=0;i<marks.length;i++){
            sum+=marks[i];
        }
        return sum/marks.length;
    }
    return <p>the average mark of {studentName} is {averageMark()}</p>
}

export default DynamicComponent