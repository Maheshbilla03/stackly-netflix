const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".overview, .content-section");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const sectionId = link.getAttribute("data-section");

    sections.forEach(function(section) {
      section.classList.remove("active-section");
    });

    document.getElementById(sectionId).classList.add("active-section");

    navLinks.forEach(function(nav) {
      nav.classList.remove("active");
    });

    link.classList.add("active");
  });
});

new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Views",
      data: [12000, 19000, 15000, 28000, 35000, 42400],
      borderColor: "#e50914",
      backgroundColor: "rgba(229, 9, 20, 0.2)",
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    },
    scales: {
      x: { ticks: { color: "#ccc" } },
      y: { ticks: { color: "#ccc" } }
    }
  }
});

new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["Movies", "TV Shows", "Documentaries"],
    datasets: [{
      data: [120, 75, 30],
      backgroundColor: ["#e50914", "#b20710", "#ff4d4d"]
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    }
  }
});

document.getElementById("saveBtn").addEventListener("click", function() {
  alert("Settings saved successfully!");
});