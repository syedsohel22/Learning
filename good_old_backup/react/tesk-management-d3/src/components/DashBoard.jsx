import { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import * as d3 from "d3";
import file from "../../file.json";
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks data from the server
    fetchTasks();
    console.log(file);
  }, []);

  const fetchTasks = async () => {
    try {
      // Make API request to fetch tasks data
      const response = await fetch("http://localhost:8080/tasks");
      const data = await response.json();
      console.log(data);
      setTasks(file);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    // Update charts whenever tasks data changes
    updateCharts();
  }, [tasks]);

  const updateCharts = () => {
    // Remove previous chart elements
    d3.select("#bar-chart svg").remove();
    d3.select("#donut-chart svg").remove();
    d3.select("#line-chart svg").remove();

    // Call individual chart functions
    createBarChart();
    createDonutChart();
    createLineChart();
  };

  const createBarChart = () => {
    const barChartContainer = d3.select("#bar-chart");
    const svg = barChartContainer
      .append("svg")
      .attr("width", 400)
      .attr("height", 200);

    // Calculate workload count per employee
    const workloadCount = {};

    tasks.length > 0 &&
      tasks.forEach((task) => {
        if (workloadCount[task.assignedUser]) {
          workloadCount[task.assignedUser]++;
        } else {
          workloadCount[task.assignedUser] = 1;
        }
      });

    const data = Object.entries(workloadCount).map(([user, count]) => ({
      user,
      count,
    }));

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.user))
      .range([0, 300])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)])
      .range([150, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.user))
      .attr("y", (d) => yScale(d.count))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => 150 - yScale(d.count))
      .attr("fill", "steelblue");

    svg
      .append("g")
      .attr("transform", "translate(0, 150)")
      .call(d3.axisBottom(xScale));
    svg.append("g").call(d3.axisLeft(yScale));
  };

  const createDonutChart = () => {
    const donutChartContainer = d3.select("#donut-chart");
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = donutChartContainer
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const taskStatusCount = {};

    tasks.forEach((task) => {
      if (taskStatusCount[task.status]) {
        taskStatusCount[task.status]++;
      } else {
        taskStatusCount[task.status] = 1;
      }
    });

    const pie = d3.pie().value((d) => d.value);

    const pieData = pie(
      Object.entries(taskStatusCount).map(([status, value]) => ({
        status,
        value,
      }))
    );

    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arcs = svg
      .selectAll("arc")
      .data(pieData)
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .attr("fill", (d, i) => color(i));

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text((d) => d.data.status);
  };

  const createLineChart = () => {
    const lineChartContainer = d3.select("#line-chart");
    const svg = lineChartContainer
      .append("svg")
      .attr("width", 400)
      .attr("height", 200);

    // Calculate task count per day
    const taskCount = {};

    tasks.forEach((task) => {
      const date = new Date(task.dueDate).toLocaleDateString();
      if (taskCount[date]) {
        taskCount[date]++;
      } else {
        taskCount[date] = 1;
      }
    });

    const data = Object.entries(taskCount).map(([date, count]) => ({
      date: new Date(date),
      count,
    }));

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, 300]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)])
      .range([150, 0]);

    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.count));

    svg
      .append("path")
      .datum(data)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "steelblue");

    svg
      .append("g")
      .attr("transform", "translate(0, 150)")
      .call(d3.axisBottom(xScale));
    svg.append("g").call(d3.axisLeft(yScale));
  };

  return (
    <Flex direction="column" align="center" mt="4">
      <Heading as="h2" size="lg" mb="4">
        Dashboard
      </Heading>

      <Box id="bar-chart" mb="4"></Box>

      <Box id="donut-chart" mb="4"></Box>

      <Box id="line-chart"></Box>
    </Flex>
  );
};

export default Dashboard;
