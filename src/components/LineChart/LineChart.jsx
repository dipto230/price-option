import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarksData = [
        { student: "Student 1", math: 78, physics: 82, chemistry: 74 },
        { student: "Student 2", math: 85, physics: 89, chemistry: 90 },
        { student: "Student 3", math: 92, physics: 94, chemistry: 88 },
        { student: "Student 4", math: 88, physics: 84, chemistry: 91 },
        { student: "Student 5", math: 76, physics: 79, chemistry: 80 },
        { student: "Student 6", math: 95, physics: 91, chemistry: 94 },
        { student: "Student 7", math: 81, physics: 76, chemistry: 78 },
        { student: "Student 8", math: 79, physics: 85, chemistry: 83 },
        { student: "Student 9", math: 87, physics: 88, chemistry: 86 },
        { student: "Student 10", math: 90, physics: 92, chemistry: 89 }
      ];
      
    return (
        <div>
        <LChart width={800} height={400} data={studentMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey="physics" stroke='yellow'></Line>
        </LChart>
            
        </div>
    );
};

export default LineChart;