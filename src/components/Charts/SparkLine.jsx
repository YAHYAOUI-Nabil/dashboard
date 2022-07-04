import React from 'react'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries2, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';


const SparkLine = () => {
  
  return (
    <ChartComponent id='line-chart' height='250px' width='290px' primaryXAxis={LinePrimaryXAxis} 
      primaryYAxis={LinePrimaryYAxis} chartArea={{border:{width:0}}}>
        <Inject services={[LineSeries, DateTime]}/>
        <SeriesCollectionDirective>
          {lineCustomSeries2.map((item, index)=>
            <SeriesDirective key={index} {...item}/>
          )}
        </SeriesCollectionDirective> 
    </ChartComponent>
  )
}

export default SparkLine