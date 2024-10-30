# Visualization 1

## Explanation of the Wildfire Distances from Glendale Visualization

This histogram visualizes the distribution of wildfires based on their distance from the city of Glendale, Arizona. The x-axis represents distance in miles from Glendale, ranging from 0 to approximately 1800 miles. The y-axis shows the number of fires observed at each distance interval. Each bar represents a 50-mile distance range, with the height of the bar indicating the number of fires that occurred within that specific distance range from Glendale.

The histogram includes a red dashed vertical line at 650 miles, labeled "Analysis Cutoff." This cutoff point highlights a specific threshold distance that may be used to focus on fires that are relatively close to Glendale. By emphasizing this cutoff, the chart helps viewers distinguish between fires within the immediate vicinity (0-650 miles) and those that are further away.

The underlying data comes from a JSON dataset that includes geographic coordinates of wildfire perimeters across the United States. These coordinates are initially in the ESRI:102008 coordinate system, so each point is transformed into the EPSG:4326 (latitude and longitude) format for accurate distance calculations. Using Glendale's coordinates (latitude: 33.53, longitude: -112.19) as a reference point, distances to each wildfire perimeter are calculated using the geodesic distance formula, which measures the shortest path between two points on the Earth's surface. Only the shortest distance from Glendale to any point on each wildfire's perimeter is considered. This calculation is done in meters and then converted to miles for readability.

The figure highlights that most wildfires occur within roughly 250 to 1000 miles from Glendale, with a peak around 900 miles. After 1000 miles, the frequency of fires decreases, with a smaller set of fires observed beyond this range.

This visualization is designed to provide insights into the spatial distribution of wildfires concerning Glendale. It can help analysts or decision-makers understand how wildfire activity varies with distance from a specific urban area, potentially guiding resource allocation or risk assessment efforts based on wildfire proximity.

# Visualization 2

## Explanation of the Total Acres Burned by Year Visualization

This line chart displays the trend of total acres burned in wildfires in the United States each year, spanning from approximately 1960 to 2020. The x-axis represents the year, with labels placed at intervals of roughly a decade, while the y-axis represents the total acres burned, formatted with commas for thousands to enhance readability. The y-axis ranges from 0 to just over 4,000,000 acres, showing a wide variance in wildfire impact over time.

Each data point, marked with a red circle, represents the total area burned by wildfires in that specific year. The line connecting these points provides a visual trend, and it is colored red for clear contrast against the background. A dashed grid is also included to help the viewer more easily match each data point to its corresponding value on the y-axis.

The data demonstrates a clear upward trend over the decades, with a relatively low and stable area burned each year from 1960 through the 1980s. Starting in the 1990s, there is a noticeable increase in both the frequency and scale of large wildfire events. This trend continues into the 21st century, with peaks in burned acreage occurring around the mid-2000s, the 2010s, and again in 2020. The highest point is around 4,000,000 acres in the last few years on the chart, indicating an intensification of wildfire activity.

This visualization suggests that wildfires have become more frequent and severe over the years, likely due to factors such as climate change, land management practices, and increased temperatures. It provides a straightforward look at how wildfire impact has evolved, enabling researchers, policymakers, and the general public to recognize the growing scale of wildfire threats and the need for proactive measures in fire management and climate adaptation.

# Visualization 3

## Explanation of the Fire Smoke Estimates vs AQI (PM 2.5) Visualization

This scatter plot illustrates the relationship between the "Smoke Impact Score" and the Air Quality Index (AQI) for particulate matter (PM 2.5), a common measure of air pollution, especially during wildfire events. The x-axis represents the Smoke Impact Score, which ranges from 30 to 100 and quantifies the potential impact of wildfire smoke on air quality. The y-axis represents the AQI values, which range from 6 to 10 in this plot, where higher values indicate worse air quality conditions.

Each point represents a unique combination of Smoke Impact Score and AQI for a specific location and time, with the marker size and blue color enhancing visibility. The points are slightly transparent, allowing overlapping data points to be distinguished more easily.

### Calculation of the Smoke Impact Score

The Smoke Impact Score in this visualization is derived from a custom function that estimates the smoke impact based on fire size (in acres) and distance to a city (in miles). This function, `estimate_smoke_impact`, was specifically calibrated to correlate with observed PM2.5 levels, making it a useful indicator for air quality conditions due to wildfire smoke.

Key components of the Smoke Impact Score calculation are as follows:

1. **Distance Factor**: The score penalizes fires that are farther away, but instead of using an inverse-square relationship (which would greatly diminish distant fires' impact), it uses an inverse-linear relationship. For distances within 250 miles, the score is maximized, while for distances up to 650 miles, it decreases linearly to zero.
2. **Fire Size Scaling**: The fire size is scaled and normalized using a cube root, which helps moderate the effect of extreme fire sizes. A scaling factor (1e5) adjusts fire size to maintain consistency across a range of values.
3. **Baseline Impact for Large Fires**: For fires over 100,000 acres, a minimum baseline impact is added, ensuring that exceptionally large fires contribute to smoke impact even at greater distances.

This estimation approach allows the Smoke Impact Score to reflect both the intensity (size) and proximity of wildfires, aligning better with observed PM2.5 levels than a simple distance-based model would.

### Insights from the Visualization

The scatter plot reveals a somewhat dispersed relationship between the Smoke Impact Score and AQI, without a clear linear correlation. This variability could be due to additional factors influencing AQI beyond just the smoke impact of individual fires, such as weather conditions, topography, and local air quality regulations. The visualization suggests that while a higher Smoke Impact Score generally aligns with increased AQI, the relationship is not strictly proportional.

# Reflection

During this assignment, one of the key learning experiences was developing a robust method for calculating the Smoke Impact Score to effectively correlate wildfire impact with Air Quality Index (AQI) values. Initially, I anticipated a straightforward relationship between fire size, distance, and AQI. However, as I delved into research and experimented with the model, I realized that AQI is influenced by a range of complex factors, including not just fire characteristics but also external elements like wind, topography, and regional air quality policies. This insight significantly shaped how I approached the problem and underscored the importance of developing a nuanced model.

## Research and Development of the Smoke Impact Score

A major part of my research focused on identifying factors that could improve the accuracy of the Smoke Impact Score. While distance from the fire to the affected city and fire size were my primary considerations, I found that other variables, such as wind direction and speed, play a critical role in smoke dispersion and could significantly influence AQI readings. Although I couldn’t incorporate wind data directly into this project due to data limitations, this finding helped me appreciate the complexity of smoke impact assessment and the limitations of a purely distance-based approach.

I also reused a geodesic distance calculation method to measure distances between wildfires and target locations. This technique, which calculates the shortest path on the Earth's surface, provided a more accurate distance metric than simple Euclidean calculations, particularly over larger distances. This method was instrumental in the model, as accurate distance measurements are essential to calculating a meaningful Smoke Impact Score.

## Insights from Collaboration and Data Attribution

Collaboration in this project provided an opportunity to explore different perspectives and exchange ideas on improving the model. Discussions with peers led to insightful suggestions about threshold values for fire size and distance penalties, which influenced the final model structure. A peer also suggested applying cube-root normalization to fire size, an approach that mitigates the impact of extreme values and results in a more balanced scoring system. This idea proved invaluable in producing a Smoke Impact Score that aligns better with observed AQI patterns.

In terms of data sources, I leveraged publicly available AQI data and researched my city’s nearby counties to obtain accurate AQI readings. This localized data provided a reliable basis for validation, helping me observe that, while Smoke Impact Score has a general relationship with AQI, the correlation was not as strong as expected. This discrepancy prompted me to investigate how other environmental factors influence AQI, which further broadened my understanding of the problem.

## Reflections on Findings and Next Steps

One unexpected outcome was realizing the lack of a significant correlation between the Smoke Impact Score and AQI. This prompted me to think critically about other influential factors that were not captured in this model, such as wind conditions and atmospheric pressure. This insight was valuable because it demonstrated the limitations of simplified models and highlighted the need for multi-variable analyses in real-world environmental studies. As a next step, I would like to explore integrating wind data, possibly through available meteorological APIs, to enhance the accuracy of the Smoke Impact Score.

Overall, this collaborative project taught me the value of incorporating multiple perspectives and reusing established techniques, like geodesic calculations, to tackle complex environmental data problems. I gained a deeper understanding of the limitations of single-variable models and developed a strong foundation for future studies on wildfire smoke impact and air quality.
