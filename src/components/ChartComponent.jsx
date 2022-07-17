import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const ChartComponent = () => {
  const data = [
    { day: "Monday", high: 30, low: 11 },
    { day: "Tuesday", high: 27, low: 9 },
    { day: "Wednesday", high: 29, low: 13 },
    { day: "Thursday", high: 28, low: 7 },
    { day: "Friday", high: 28, low: 12 },
    { day: "Saturday", high: 30, low: 10 },
    { day: "Sunday", high: 26, low: 8 },
  ];
  return (
    <>
      <ResponsiveContainer height={"100%"} width={"100%"}>
        <LineChart
          data={data}
          margin={{ top: 0, left: 0, bottom: 0, right: 10 }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#044962",
              borderRadius: "10px",
              border: "none",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="high"
            stroke="#1f7a8c"
            activeDot={{ stroke: "#022b3a", r: 2 }}
          />
          <Line
            type="monotone"
            dataKey="low"
            stroke="#BFDBF7"
            activeDot={{ stroke: "#BFDBF7", r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartComponent;
