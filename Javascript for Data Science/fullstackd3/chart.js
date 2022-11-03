//import * as d3 from "d3";

async function drawLineChart() {
    const data = await d3.json("./my_weather_data.json")

    const yAccessor = d => d["temperatureMax"]
    const ParseDate = d3.timeParse("%Y-%m-%d")
    const xAccessor = d => ParseDate(d.date)

    // Dimensions
    let dimensions = {
        width: window.innerWidth * 0.9,
        height: 400, // 400 pixels
        margins: {
            top: 15,
            right: 25,
            bottom: 40,
            left: 60,
        }
    }

    // Bounded dimensions
    
    dimensions.boundedWidth = dimensions.width - dimensions.margins.left - dimensions.margins.right
    dimensions.boundedHeight = dimensions.height - dimensions.margins.top - dimensions.margins.bottom
    //console.log(dimensions)



    // d3.select
    const wrapper = d3.select("#wrapper")
    //const svg = wrapper.append("svg")
        .append("svg")
            .attr("width", dimensions.width)
            .attr("height", dimensions.height)

    const bounds = wrapper.append("g")
        .style("transform", `translate(${
            dimensions.margins.left
        }px, ${
            dimensions.margins.top
        }px)`)
    //console.log(bounds)

    // Create scales
    const yScale = d3.scaleLinear() 
        //.domain([0, 100])
        .domain(d3.extent(data, yAccessor))
        .range([dimensions.boundedHeight, 0])

    const freezingTemperaturePlacement = yScale(32)
    const freezingTemperatures = bounds.append("rect")
        .attr("x", 0)
        .attr("width", dimensions.boundedWidth)
        .attr("y", freezingTemperaturePlacement)
        .attr("height", dimensions.boundedHeight - freezingTemperaturePlacement)
        .attr("fill", "#e0f3f3")

    const xScale = d3.scaleTime()
        .domain(d3.extent(data, xAccessor))
        .range([0, dimensions.boundedWidth])

    //Draw data
    const lineGenerator = d3.line()
        .x(d => xScale(xAccessor(d)))
        .y(d => yScale(yAccessor(d)))

    const line = bounds.append("path")
        .attr("d", lineGenerator(data))
        //.attr("d", "M 0 0 L 100 0 L 100 100 L 50 150")

        .attr("fill", "none")
        .attr("stroke", "#af9358")
        .attr("stroke-width", 2)

    //Draw peripherals

    const yAxisGenerator = d3.axisLeft()
        .scale(yScale)
    const yAxis = bounds.append("g")
        .call(yAxisGenerator)

    const xAxisGenerator = d3.axisBottom()
        .scale(xScale)
    const xAxis = bounds.append("g")
        .call(xAxisGenerator)
        .style("transform", `translateY(${
            dimensions.boundedHeight
        }px)`)

}
drawLineChart();