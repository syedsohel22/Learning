// Sample data of user tasks
const tasks = [
  { id: 1, user: "John Doe", task: "Complete report", status: "In Progress" },
  { id: 2, user: "Jane Smith", task: "Review designs", status: "Completed" },
  { id: 3, user: "John Doe", task: "Prepare presentation", status: "Pending" },
  {
    id: 4,
    user: "Alice Johnson",
    task: "Update website content",
    status: "In Progress",
  },
  // Add more tasks as needed
];

// Function to render the dashboard
function renderDashboard() {
  const dashboard = d3.select("#dashboard");

  // Append search input
  dashboard
    .append("input")
    .attr("type", "text")
    .attr("placeholder", "Search tasks...")
    .on("input", searchTasks);

  // Append filter select
  const filterSelect = dashboard.append("select").on("change", filterTasks);

  filterSelect.append("option").text("All").attr("value", "all");

  // Get unique user names for filtering
  const uniqueUsers = [...new Set(tasks.map((task) => task.user))];
  uniqueUsers.forEach((user) => {
    filterSelect.append("option").text(user).attr("value", user);
  });

  // Append tasks table
  const table = dashboard.append("table");

  // Append table headers
  const thead = table.append("thead");
  const headers = ["ID", "User", "Task", "Status"];
  thead
    .append("tr")
    .selectAll("th")
    .data(headers)
    .enter()
    .append("th")
    .text((d) => d);

  // Append table rows with task data
  const tbody = table.append("tbody");
  tbody
    .selectAll("tr")
    .data(tasks)
    .enter()
    .append("tr")
    .html(
      (d) =>
        `<td>${d.id}</td><td>${d.user}</td><td>${d.task}</td><td>${d.status}</td>`
    );

  // Append bar chart
  const barChartContainer = dashboard.append("div").attr("id", "bar-chart");

  const barChartSvg = barChartContainer
    .append("svg")
    .attr("width", 400)
    .attr("height", 200);

  const taskCounts = countTasksByStatus();
  const barData = Object.entries(taskCounts).map(([status, count]) => ({
    status,
    count,
  }));

  const xScale = d3
    .scaleBand()
    .domain(barData.map((d) => d.status))
    .range([0, 300])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(barData, (d) => d.count)])
    .range([150, 0]);

  barChartSvg
    .selectAll("rect")
    .data(barData)
    .enter()
    .append("rect")
    .attr("x", (d) => xScale(d.status))
    .attr("y", (d) => yScale(d.count))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => 150 - yScale(d.count))
    .attr("fill", "steelblue");

  barChartSvg
    .append("g")
    .attr("transform", "translate(0, 150)")
    .call(d3.axisBottom(xScale));

  barChartSvg.append("g").call(d3.axisLeft(yScale));

  // Append pie chart
  const pieChartContainer = dashboard.append("div").attr("id", "pie-chart");

  const pieChartSvg = pieChartContainer
    .append("svg")
    .attr("width", 300)
    .attr("height", 300);

  const pieData = Object.entries(taskCounts).map(([status, count]) => ({
    status,
    count,
  }));

  const pie = d3.pie().value((d) => d.count);

  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  const arcs = pieChartSvg
    .selectAll("arc")
    .data(pie(pieData))
    .enter()
    .append("g")
    .attr("class", "arc");

  const arc = d3.arc().innerRadius(0).outerRadius(100);

  arcs
    .append("path")
    .attr("d", arc)
    .attr("transform", "translate(150,150)")
    .attr("fill", (d, i) => colors(i));

  arcs
    .append("text")
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .text((d) => d.data.status);
}

// Function to filter tasks based on the selected user
function filterTasks() {
  const selectedUser = this.value;
  const filteredTasks =
    selectedUser === "all"
      ? tasks
      : tasks.filter((task) => task.user === selectedUser);
  updateTable(filteredTasks);
  updateCharts(filteredTasks);
}

// Function to search tasks based on input value
function searchTasks() {
  const searchTerm = this.value.toLowerCase();
  const filteredTasks = tasks.filter(
    (task) =>
      task.user.toLowerCase().includes(searchTerm) ||
      task.task.toLowerCase().includes(searchTerm) ||
      task.status.toLowerCase().includes(searchTerm)
  );
  updateTable(filteredTasks);
  updateCharts(filteredTasks);
}

// Function to update the table with filtered/sorted tasks
function updateTable(filteredTasks) {
  const tbody = d3.select("tbody");
  const rows = tbody.selectAll("tr").data(filteredTasks, (d) => d.id);

  // Remove existing rows
  rows.exit().remove();

  // Add new rows
  rows
    .enter()
    .append("tr")
    .html(
      (d) =>
        `<td>${d.id}</td><td>${d.user}</td><td>${d.task}</td><td>${d.status}</td>`
    );
}

// Function to update charts with filtered/sorted tasks
function updateCharts(filteredTasks) {
  const taskCounts = countTasksByStatus(filteredTasks);

  const barChartSvg = d3.select("#bar-chart svg");

  const barData = Object.entries(taskCounts).map(([status, count]) => ({
    status,
    count,
  }));

  const xScale = d3
    .scaleBand()
    .domain(barData.map((d) => d.status))
    .range([0, 300])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(barData, (d) => d.count)])
    .range([150, 0]);

  barChartSvg
    .selectAll("rect")
    .data(barData)
    .transition()
    .duration(500)
    .attr("x", (d) => xScale(d.status))
    .attr("y", (d) => yScale(d.count))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => 150 - yScale(d.count))
    .attr("fill", "steelblue");

  barChartSvg.select("g").call(d3.axisBottom(xScale));

  barChartSvg.select("g").call(d3.axisApologies);
  Left(yScale);

  const pieChartSvg = d3.select("#pie-chart svg");

  const pieData = Object.entries(taskCounts).map(([status, count]) => ({
    status,
    count,
  }));

  const pie = d3.pie().value((d) => d.count);

  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  const arcs = pieChartSvg.selectAll("arc").data(pie(pieData));

  arcs
    .select("path")
    .transition()
    .duration(500)
    .attr("d", arc)
    .attr("fill", (d, i) => colors(i));

  arcs
    .select("text")
    .transition()
    .duration(500)
    .attr("transform", (d) => `translate(${arc.centroid(d)})`)
    .text((d) => d.data.status);
}

// Function to count tasks by status
function countTasksByStatus(filteredTasks = tasks) {
  const taskCounts = {};

  filteredTasks.forEach((task) => {
    if (taskCounts[task.status]) {
      taskCounts[task.status]++;
    } else {
      taskCounts[task.status] = 1;
    }
  });

  return taskCounts;
}

// Render the dashboard
renderDashboard();
