# DATA-512 Wildfire Analysis Project

This project investigates the impact of wildfires on air quality, specifically PM2.5 levels as measured by the Air Quality Index (AQI), using data from various wildfire datasets and AQI records. By analyzing wildfire data in relation to AQI, this project aims to develop a Smoke Impact Score to understand the effects of wildfire smoke on air quality in cities such as Glendale, Arizona.

## Project Structure

### Part_1

The main folder for Part 1 of the project, containing all data, code, and output results organized by step.

#### data/

This folder contains raw and processed data files related to wildfires and their attributes. **Note: The `data/` folder is included in `.gitignore` to avoid committing large datasets to version control.**

To obtain the raw data, download it from the **Combined Wildland Fire Datasets for the United States and Certain Territories, 1800s-Present** [link here](https://www.sciencebase.gov/catalog/item/61aa537dd34eb622f699df81). This dataset contains wildfire perimeters in various geographic formats.

- `USGS_Wildland_Fire_Combined_Dataset.json` - JSON file containing detailed data on wildfires, including location and size.
- `usgs_wildland_fire_combined_dataset.json.xml` - XML format of the combined wildfire dataset for interoperability with other applications.
- `USGS_Wildland_Fire_Merged_Dataset.json` - JSON file with additional merged information on wildfires.
- `usgs_wildland_fire_merged_dataset.json.xml` - XML format of the merged dataset.
- `Wildland_Fire_Polygon_Metadata.xml` - Metadata file providing details about fire perimeter geometry and attributes.

#### Step_0_and_Step_1/

Contains notebooks and initial results for data preprocessing, cleaning, and exploratory analysis.

- **Notebooks**

  - `AQI.ipynb` - Processes AQI data, focusing on PM2.5 levels in Glendale and nearby areas, for evaluating the air quality impact.
  - `Forecasting.ipynb` - A time-series analysis notebook to forecast AQI based on historical data, particularly during wildfire seasons.
  - `wildfire_data.ipynb` - Processes wildfire data, calculating distances from Glendale and other parameters essential for the Smoke Impact Score.

- **Data Files**
  - `glendale_AQI.csv` - CSV file containing AQI data for Glendale.
  - `wildfire_impact_glendale_1961_2021.csv` - Dataset summarizing the calculated Smoke Impact Score for wildfires near Glendale from 1961 to 2021.

#### Step_2_visualizations/

Contains notebooks and outputs for creating visualizations that represent the relationship between wildfire activity and AQI levels.

- `visualizations.ipynb` - Notebook dedicated to producing various visualizations, such as scatter plots and histograms, to illustrate findings and trends in wildfire impact on air quality.

#### Step_3_reflection/

Includes a reflection document detailing insights, challenges, and methodologies from the analysis.

- `reflection.md` - Reflective report on the collaborative process, including specific techniques reused, challenges encountered, and insights gained through the research.

### Part_2

Part 2 extends the analysis to focus on healthcare impacts, specifically examining the relationship between the Smoke Impact Score and respiratory health outcomes in Glendale, Arizona.

#### Data Files

- `Aastma_data_merged.csv` - Dataset containing merged asthma-related health data for analysis
- `wildfire-trends.jpg.png` - Visualization of wildfire trends and their correlation with health outcomes
- `wildfire-trends.tsx` - TypeScript component for interactive visualization of wildfire trends

#### Healthcare Impact Analysis

The extension analyzes hospital admission records for respiratory conditions in relation to wildfire smoke exposure, focusing on:

- Trends in hospital admissions during high Smoke Impact Score periods
- Effects on vulnerable populations
- Public health preparedness recommendations

Additional health data is sourced from:

- Arizona Department of Health Services
- CDC's National Environmental Public Health Tracking Network [CDC Tracking Network](https://ephtracking.cdc.gov/DataExplorer/)

### Part_3

The presentation component of the project, containing final deliverables and documentation.

#### Files

- `Presentation.pptx` - Final presentation slides showcasing project findings
- Updated documentation and reflection on the entire project lifecycle

### Other Files

- `.env` - **Environment file storing sensitive information such as the AQI API key and email**. To access AQI data, create a `.env` file in the root directory and add the following:
  ```plaintext
  email=your_email@example.com
  api_key=your_aqi_api_key
  ```
- `.gitignore` - Specifies which files Git should ignore
- `LICENSE` - Project license information
- `README.md` - This file, providing comprehensive project documentation

## Timeline and Deliverables

The project follows a structured timeline with key deliverables:

1. Data Collection and Preparation (Week 1)
2. Data Analysis (Week 2)
3. Interpretation and Model Refinement (Week 3)
4. Documentation and Presentation Preparation (Week 4)
5. Final Presentation and Repository Organization (Week 5)

## Data Privacy and Limitations

All health data analysis complies with HIPAA regulations, using only publicly available, de-identified data. The project acknowledges limitations in data accessibility and model comprehensiveness, particularly regarding factors such as wind patterns that are not included in the current Smoke Impact Score model.
